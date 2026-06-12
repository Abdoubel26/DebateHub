import React from 'react'

function JoinedDebatesPage() {
  return (
    <div className="flex flex-col flex-1 gap-4 overflow-y-scroll p-4 bg-gray-900">
  {dummyTopics.map((tpc) => {

    return (
      <div
        key={tpc.id}
        className="w-full rounded-2xl border border-gray-800 bg-gray-800/40 p-4 shadow-sm backdrop-blur-sm transition hover:bg-gray-800/70 hover:shadow-md"
      >
        <div className="flex items-start gap-4">
          <img
            src={tpc.poster.image}
            alt={tpc.poster.name}
            className="h-12 w-12 rounded-full object-cover border border-gray-700"
          />

          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-200">
                  {tpc.poster.name}
                </p>
                <p className="text-xs text-slate-500">
                  {new Date(tpc.createdAt).toLocaleString()}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  tpc.status === "open"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : tpc.status === "in debate"
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "bg-slate-700/30 text-slate-400 border border-slate-700/50"
                }`}
              >
                {tpc.status}
              </span>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                {tpc.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                {tpc.description}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300 border border-slate-700/50">
                  {tpc.category}
                </span>
                {tpc.secondParticipant && (
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400 border border-violet-500/20">
                    vs user
                  </span>
                )}
              </div>

              <button
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all bg-red-800 cursor-pointer text-white `}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
  )
}



export default JoinedDebatesPage


export const dummyTopics = [
  {
    id: "top_2",
    poster: {
      name: "Jane Doe",
      image: "https://i.pravatar.cc/150?img=12",
    },
    title: "Social media does more harm than good",
    description:
      "Platforms are engineered to maximize attention, not well-being.",
    category: "society",
    status: "open",
    secondParticipant: null,
    createdAt: "2026-06-12T06:52:00.000Z",
  },
  {
    id: "top_3",
    poster: {
      name: "Alice Brown",
      image: "https://i.pravatar.cc/150?img=47",
    },
    title: "Education should be fully free at university level",
    description:
      "Higher education should be publicly funded and accessible to everyone.",
    category: "politics",
    status: "open",
    secondParticipant: null,
    createdAt: "2026-06-11T08:52:00.000Z",
  },
  {
    id: "top_5",
    poster: {
      name: "Omar Ali",
      image: "https://i.pravatar.cc/150?img=28",
    },
    title: "Capitalism is the best economic system",
    description:
      "Free markets and competition create more opportunity than alternatives.",
    category: "philosophy",
    status: "open",
    secondParticipant: {
      name: "Victoria",
      image: ""
    },
    createdAt: "2026-06-09T07:52:00.000Z",
  },
];