import { prisma } from "../prisma.js";

const batches = await prisma.directImportBatch.findMany({
  orderBy: {
    importedAt: "desc",
  },
})

console.log(batches)

await prisma.$disconnect()