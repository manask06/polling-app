import prisma from "@/app/lib/prisma"
import { PollOption, Poll } from "@prisma/client"

export const resolvers = {
    Query: {
        polls: async () => {
          return prisma.poll.findMany()
        },
        poll: async (_: unknown, { id }: { id: number}) => await prisma.poll.findUnique({ where: { id: Number(id) }, include: { options: true } })
    },
    Poll: {
      options: async (parent: Poll): Promise<PollOption[]> => {
        const options = await prisma.pollOption.findMany({
          where: { pollId: parent.id },
        });
        // Ensure we return an empty array if no options are found
        return options || [];
      },
    },
    Mutation: {
      createPoll: async (_: unknown, { title, description, options }: { title: string, description: string, options: PollOption[]}) => {
        const poll = await prisma.poll.create({
          data: {
            title,
            description,
            options: {
              create: options.map(option => ({ text: option.text, votes: option.votes }))
            }
          },
          include: { options: true }
        })
        return poll
      },
      votePoll: async (_: unknown, { pollId, optionId }: { pollId: number; optionId: number }) => {
        await prisma.pollOption.update({
          where: { id: Number(optionId) },
          data: { votes: { increment: 1 } },
        });
        return prisma.poll.findUnique({ where: { id: Number(pollId) }, include: { options: true } });
      },
      deletePoll: async (_: unknown, { id }: { id: number }) => {
        await prisma.pollOption.deleteMany({
          where: { pollId: Number(id) },
        });
        await prisma.poll.delete({
          where: { id: Number(id) },
        });
        return true;
      },
    }
}