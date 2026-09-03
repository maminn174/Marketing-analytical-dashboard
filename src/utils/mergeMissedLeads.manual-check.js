import { mergeMissedLeads } from "./mergeMissedLeads.ts"
import { filterDashboardData } from "./filterDashboardData.ts"
import { calculateMetrics } from "./calculateMetrics.ts"

const mainData = [
  {
    id: 1,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "buy windows",
    impressions: 100,
    clicks: 10,
    spend: 500,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 1.5,
    sales: 0,
  },
  {
    id: 2,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "install windows",
    impressions: 200,
    clicks: 20,
    spend: 900,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2.1,
    sales: 0,
  },
  {
    id: 4,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 3",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 5,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 4",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 6,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 5",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 7,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 6",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 8,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 7",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 9,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 8",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 10,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 9",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 11,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign A",
    regionName: "Moscow",
    keywordText: "keyword 10",
    impressions: 100,
    clicks: 10,
    spend: 100,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 2,
    sales: 0,
  },
  {
    id: 3,
    date: "2026-07-30",
    source: "direct",
    campaignName: "Campaign B",
    regionName: "Saint Petersburg",
    keywordText: "repair doors",
    impressions: 150,
    clicks: 15,
    spend: 700,
    leads: 0,
    qualifiedLeads: 0,
    avgImpressionPosition: 1.8,
    sales: 0,
  },
]

const missedLeads = [
  {
    id: 101,
    leadDate: "2026-07-30T10:15:00.000Z",
    campaignName: "Campaign A",
    keywordText: "buy windows",
  },
  {
    id: 102,
    leadDate: "2026-07-30T11:00:00.000Z",
    campaignName: "Campaign A",
    keywordText: "",
  },
  {
    id: 103,
    leadDate: "2026-07-30T12:30:00.000Z",
    campaignName: "Campaign B",
    keywordText: "   ",
  },
]

const mergedData = mergeMissedLeads(mainData, missedLeads)

const campaignAData = filterDashboardData({
  data: mergedData,
  selectedRegion: "Все регионы",
  selectedCampaign: "Campaign A",
  allRegionsLabel: "Все регионы",
  allCampaignsLabel: "Все кампании",
  startDate: null,
  endDate: null,
})

const totalCampaignALeads = campaignAData.reduce((acc, item) => {
  return acc + item.leads
}, 0)

const campaignBData = filterDashboardData({
  data: mergedData,
  selectedRegion: "Все регионы",
  selectedCampaign: "Campaign B",
  allRegionsLabel: "Все регионы",
  allCampaignsLabel: "Все кампании",
  startDate: null,
  endDate: null,
})

const totalCampaignBLeads = campaignBData.reduce((acc, item) => {
  return acc + item.leads
}, 0)

const moscowCampaignAData = filterDashboardData({
  data: mergedData,
  selectedRegion: "Moscow",
  selectedCampaign: "Campaign A",
  allRegionsLabel: "Все регионы",
  allCampaignsLabel: "Все кампании",
  startDate: null,
  endDate: null,
})

const totalMoscowCampaignALeads = moscowCampaignAData.reduce((acc, item) => {
  return acc + item.leads
}, 0)

const allData = filterDashboardData({
  data: mergedData,
  selectedRegion: "Все регионы",
  selectedCampaign: "Все кампании",
  allRegionsLabel: "Все регионы",
  allCampaignsLabel: "Все кампании",
  startDate: null,
  endDate: null,
})

const totalAllLeads = allData.reduce((acc, item) => {
  return acc + item.leads
}, 0)

const allMetrics = calculateMetrics(allData)
const campaignAMetrics = calculateMetrics(campaignAData)

const expectEqual = (actual, expected, message) => {
  if (actual !== expected) {
    console.error(`FAIL: ${message}`)
    console.error(`Expected: ${expected}`)
    console.error(`Actual: ${actual}`)
    return
  }
  console.log(`OK: ${message}`)
}

const expectClose = (actual, expected, message) => {
  const difference = Math.abs(actual - expected)

  if (difference > 0.001) {
    console.error(`FAIL: ${message}`)
    console.error(`Expected close to: ${expected}`)
    console.error(`Actual: ${actual}`)
    return
  }

  console.log(`OK: ${message}`)
}

expectEqual(mergedData.length, 13, "ручные лиды без ключа добавились отдельными строками")
const manualLeadWithoutKeyword = mergedData.find((item) => item.id === "manual-102")
expectEqual(manualLeadWithoutKeyword.leads, 1, "лид без ключа остаётся ровно одним лидо")
const manualRows = mergedData.filter((item) => item.isManualLead)
expectEqual(manualRows.length, 2, "лиды без ключа не размножаются по рекламным строкам")
const keywordRow = mergedData.find((item) => {
  return item.campaignName === "Campaign A" && item.keywordText === "buy windows"
})
expectEqual(keywordRow.leads, 1, "лид с ключом доступен на уровне этой фразы")
expectEqual(keywordRow.spend, 500, "один лид не меняет расход")
expectEqual(totalCampaignALeads, 2, "лид без ключа учитывается при выборе его кампании")
expectEqual(totalCampaignBLeads, 1, "лид без ключа не учитывается в другой кампании")
expectEqual(totalMoscowCampaignALeads, 1, "лид без региона не учитывается в конкретном регионе")
expectEqual(totalAllLeads, 3, "лид без ключа учитывается в общей статистике")
expectClose(allMetrics.cpl, 2900 / 3, "общий CPL пересчитывается правильно")
expectEqual(campaignAMetrics.cpl, 1100, "CPL кампании пересчитывается правильно")