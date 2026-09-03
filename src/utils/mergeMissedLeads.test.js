import { describe, expect, it } from "vitest"
import { mergeMissedLeads } from "./mergeMissedLeads.ts";

describe("mergeMissedLeads", () => {
  it("не меняет данные, если массив ручных лидов пустой", () => {
    const mainData = [
      {
        date: "2026-07-01",
        campaignName: "Search Brand",
        keywordText: "купить crm",
        leads: 2,
      },
    ]
    const missedLeads = []
    const result = mergeMissedLeads(mainData, missedLeads)

    expect(result[0].leads).toBe(2)
    expect(result).toHaveLength(1)
  })

  it("добавляет ручной лид отдельной строкой, даже если он совпадает с рекламными строками", () => {
    const mainData = [
      {
        date: "2026-07-01",
        campaignName: "Search Brand",
        keywordText: "купить crm",
        leads: 2,
      },
      {
        date: "2026-07-01",
        campaignName: "Search Brand",
        keywordText: "купить crm",
        leads: 2,
      },
    ]
    const missedLeads = [
      {
        id: '1',
        leadDate: "2026-07-01T12:30:00",
        campaignName: "Search Brand",
        keywordText: 'купить crm',
      }
    ]
    const result = mergeMissedLeads(mainData, missedLeads)

    expect(result[0].leads).toBe(2)
    expect(result[1].leads).toBe(2)
    expect(result).toHaveLength(3)

    const manualRow = result.find((item) => item.isManualLead === true)
    expect(manualRow).toBeDefined()
    expect(manualRow.keywordText).toBe(missedLeads[0].keywordText)
    expect(manualRow.campaignName).toBe(missedLeads[0].campaignName)
    expect(manualRow.date).toBe(missedLeads[0].leadDate.slice(0, 10))
    expect(manualRow.leads).toBe(1)
    expect(manualRow.isManualLead).toBe(true)
  })

  it("добавляет несколько ручных лидов как несколько отдельных строк", () => {
    const mainData = [
      {
        date: "2026-07-01",
        campaignName: "Search Brand",
        keywordText: "купить crm",
        leads: 2,
      },
      {
        date: "2026-07-01",
        campaignName: "Search Brand",
        keywordText: "купить crm",
        leads: 2,
      },
    ]
    const missedLeads = [
      {
        id: '1',
        leadDate: "2026-07-01T12:30:00",
        campaignName: "Search Brand",
        keywordText: 'купить crm',
      },
      {
        id: '2',
        leadDate: "2026-07-01T12:30:00",
        campaignName: "Search Brand",
        keywordText: 'купить trgr',
      }
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