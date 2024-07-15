import prisma from "@/app/lib/prisma"
import { PollOption, Poll } from "@prisma/client"

export const resolvers = {
    Query: {
        polls: async () => {
          return prisma.poll.findMany()
        },
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
    }
}