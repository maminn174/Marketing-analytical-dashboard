import { describe, expect, it } from "vitest"
import { mergeMissedLeads } from "./mergeMissedLeads"
import type { DirectStatsRow, ManualLead } from "@/types/dashboard"

const createDirectRow = (overrides: Partial<DirectStatsRow>): DirectStatsRow => ({
  id: 1,
  date: "2026-07-01",
  campaignName: "Search Brand",
  adGroupName: "Group",
  spend: 0,
  clicks: 0,
  directConversions: 0,
  leads: 0,
  qualifiedLeads: 0,
  sales: 0,
  impressions: 0,
  avgBidPerClick: 0,
  avgImpressionPosition: 0,
  ...overrides,
})

const createManualLead = (overrides: Partial<ManualLead>): ManualLead => ({
  id: "1",
  leadDate: "2026-07-01T12:30:00",
  campaignName: "Search Brand",
  appealType: "FORM",
  amoDealUrl: "https://example.com/lead/1",
  ...overrides,
})

describe("mergeMissedLeads", () => {
  it("keeps main data unchanged when manual leads are empty", () => {
    const mainData = [
      createDirectRow({
        keywordText: "buy crm",
        leads: 2,
      }),
    ]
    const missedLeads: ManualLead[] = []

    const result = mergeMissedLeads(mainData, missedLeads)

    expect(result[0].leads).toBe(2)
    expect(result).toHaveLength(1)
  })

  it("adds a manual lead as a separate row", () => {
    const mainData = [
      createDirectRow({
        keywordText: "buy crm",
        leads: 2,
      }),
      createDirectRow({
        id: 2,
        keywordText: "buy crm",
        leads: 2,
      }),
    ]
    const missedLeads = [
      createManualLead({
        id: "1",
        keywordText: "buy crm",
      }),
    ]

    const result = mergeMissedLeads(mainData, missedLeads)

    expect(result[0].leads).toBe(2)
    expect(result[1].leads).toBe(2)
    expect(result).toHaveLength(3)

    const manualRow = result.find((item) => item.isManualLead === true)
    expect(manualRow).toBeDefined()

    if (!manualRow) {
      throw new Error("manualRow not found")
    }

    expect(manualRow.keywordText).toBe(missedLeads[0].keywordText)
    expect(manualRow.campaignName).toBe(missedLeads[0].campaignName)
    expect(manualRow.date).toBe(missedLeads[0].leadDate.slice(0, 10))
    expect(manualRow.leads).toBe(1)
    expect(manualRow.isManualLead).toBe(true)
  })

  it("adds several manual leads as separate rows", () => {
    const mainData = [
      createDirectRow({
        keywordText: "buy crm",
        leads: 2,
      }),
      createDirectRow({
        id: 2,
        keywordText: "buy crm",
        leads: 2,
      }),
    ]
    const missedLeads = [
      createManualLead({
        id: "1",
        keywordText: "buy crm",
      }),
      createManualLead({
        id: "2",
        amoDealUrl: "https://example.com/lead/2",
        keywordText: "buy trgr",
      }),
    ]

    const result = mergeMissedLeads(mainData, missedLeads)

    expect(result[0].leads).toBe(2)
    expect(result[1].leads).toBe(2)
    expect(result).toHaveLength(4)

    const manualRows = result.filter((item) => item.isManualLead === true)
    expect(manualRows).toHaveLength(2)

    const allManualRowsHaveOneLead = manualRows.every((item) => item.leads === 1)
    expect(allManualRowsHaveOneLead).toBe(true)
  })
})
