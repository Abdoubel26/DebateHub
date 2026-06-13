import Image from "next/image";
import { ArrowUp } from "lucide-react";
import ChatSidebarLinks from "@/lib/ChatSidebarLinks";
import { db } from '@/db';
import { topics, users } from '@/db/schema';
import { eq, aliasedTable, and } from "drizzle-orm"
import { auth } from "@clerk/nextjs/server"


interface EnrichedTopic {
  id: string;
  title: string;
  description: string | null;
  category: "culture" | "ethics" | "history" | "philosophy" | "politics" | "psychology" | "religion" | "science" | "society";
  status: "open" | "in_debate" | "ended";
  createdAt: Date | string;
  poster: {
    name: string;
    image: string | null;
    clerkId: string;
  };
  secondParticipant: {
    name: string;
    image: string | null;
    clerkId: string;
  } | null; 
}


async function ChatPage() {

  const {userId} = await auth()

  const posters = aliasedTable(users, "posters");
  const opponents = aliasedTable(users, "opponents");

  const fetchedTopics = await db
    .select({
      id: topics.id,
      title: topics.title,
      description: topics.description,
      category: topics.category,
      status: topics.status,
      createdAt: topics.createdAt,
      poster: {
        name: posters.name,
        image: posters.imageUrl,
        clerkId: posters.clerkId,
      },
      secondParticipant: {
        name: opponents.name,
        image: opponents.imageUrl,
        clerkId: opponents.clerkId,
      },
    })
    .from(topics)
    .innerJoin(posters, eq(topics.posterId, posters.clerkId))
    .leftJoin(opponents, eq(topics.secondParticipantId, opponents.clerkId))
    .where(and(eq(topics.secondParticipantId, userId as string), eq(topics.posterId, userId as string))) as unknown as EnrichedTopic[]

  return (
    <div className="flex flex-1 h-[calc(100vh-65px)] bg-gray-900 text-white overflow-hidden">
      
    
    <ChatSidebarLinks topics={fetchedTopics}/>
      

    </div>
  );
}

export default ChatPage;