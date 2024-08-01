// app/polls/[id]/page.tsx
"use client"

import { useEffect, useState } from "react"
import { Poll as PollType, fetchPollById, votePoll } from "@/app/lib/polls"
import { useParams } from "next/navigation";
import PollOption from "@/app/components/PollOption";

export default function PollDetailPage() {
  const [poll, setPoll] = useState<PollType | null>(null);
  const params = useParams()
  
  
  useEffect(() => {
    const getPoll = async () => {
      const data = await fetchPollById(parseInt(params!.id as string));
      setPoll(data);
    };
    getPoll();
  }, [])

  const handleVote = async (optionId: number) => {
    await votePoll(parseInt(params!.id as string), optionId);
    const updatedPoll = await fetchPollById(parseInt(params!.id as string));
    setPoll(updatedPoll);
  };

  if (!poll) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{poll.title}</h1>
      <p className="mb-4">{poll.description}</p>
      {poll?.options?.map((option) => (
        <PollOption key={option.id} option={option} onVote={handleVote} />
      ))}
    </div>
  );
}

