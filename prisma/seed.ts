import { PrismaClient } from '@prisma/client'

let prisma 
async function main() {
  prisma = new PrismaClient()

  await prisma.poll.create({
    data: {
      title: "Test Poll 5",
      description: "This is a test poll",
      options: {
        create: [
          { text: "Option 1" },
          { text: "Option 2" },
          { text: "Option 3" },
        ],
      },
    },
  })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma!.$disconnect()
  })