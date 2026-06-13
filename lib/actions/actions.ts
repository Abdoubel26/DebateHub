"use server"

import { db } from "@/db";
import { topics } from "@/db/schema";
import { redirect } from "next/navigation";

type categoryType = "culture" | "ethics" | "history" | "philosophy" | "politics" | "psychology" | "religion" | "science" | "society" ;

export const addTopic = async (userId: string, formData: FormData) => {
    
    if(!userId) redirect("/");
    
    const title = formData.get("title") as string;
    const category = formData.get("category") as categoryType;
    const description = formData.get("description") as string;

    if (!title || !category || !description) return;

    const insertedTopic = await db.insert(topics).values([{
        posterId: userId,
        title: title,
        category: category,
        description: description,
        status: "open",
        secondParticipantId: null, 
    }]);

    return redirect("/")
}