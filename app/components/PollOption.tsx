"use client"
import Link from "next/link";

interface PollOptionProps {
  option: { id: number; text: string}
  onVote: (optionId: number) => void
}

export default function PollOption({option, onVote}: PollOptionProps) {
  return (
    <div className="flex justify-between items-center mb-2">
      <span>{option.text}</span>
      <button onClick={() => onVote(option.id)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Vote
      </button>
    </div>
  );
}