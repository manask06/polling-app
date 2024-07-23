"use client"

import CreatePollForm from "@/app/components/CreatePollForm";
import { createPoll } from "@/app/lib/polls";
import { useRouter } from "next/navigation";

export default function CreatePollPage() {
  const router = useRouter()

  const handleSubmit = async (pollData: { title: string; description: string; options: string[] }) => {
    // await createPoll(pollData);
    router.replace('/polls')
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Poll</h1>
      <CreatePollForm onSubmit={handleSubmit} />
    </div>
  );
}
