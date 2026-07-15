import { prisma } from "../prisma.js";

const batch = await prisma.directImportBatch.create({
  data: {
    fileName: 'direct-report.csv',
    rowsTotal: 100,
    rowsImported: 95,
    rowsSkipped: 5,
  },
})

console.log(batch)

await prisma.$disconnect()