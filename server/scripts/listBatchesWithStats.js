import { prisma } from "../prisma.js";

const batches = await prisma.directImportBatch.findMany({
  include: {
    stats: true,
  },
  orderBy: {
    importedAt: 'desc',
  },
})

console.log(JSON.stringify(batches, null, 2))

await prisma.$disconnect()