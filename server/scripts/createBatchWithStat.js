import { prisma } from "../prisma.js";

const batch = await prisma.directImportBatch.create({
  data: {
    fileName: "direct-report-with-stat.csv",
    rowsTotal: 1,
    rowsImported: 1,
    rowsSkipped: 0,

    stats: {
      create: {
        statDate: new Date("2026-07-15"),
        campaignId: "campaign-1",
        campaignName: "Search | Bankruptcy | Moscow",
        adGroupId: "group-1",
        adGroupName: "Hot requests",
        criteriaType: "KEYWORD",
        keywordText: "bank",
        targetRegionName: "Moscow",
        targetRegionId: "213",
        deviceType: "DESKTOP",
        spend: 1500.75,
        clicks: 20,
        directConversions: 3,
        impressions: 1000,
        avgBidPerClick: 75.04,
        avgImpressionPosition: 2.3,
      },
    },
  },
  include: {
    stats: true,
  }
})

console.log(JSON.stringify(batch, null, 2))
await prisma.$disconnect()