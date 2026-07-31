import { describe, expect, it } from "vitest"
import { mergeMissedLeads } from "./mergeMissedLeads.js";

describe("mergeMissedLeads", () => {
  it("увеличивает leads на 1, если ручной лид совпадает по дате, кампании и ключу", () => {
    const mainData = [
      {
        date: "2026-07-01",
        campaignName: "Search Brand",
        keywordText: "купить crm",
        leads: 2,
      }
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

    expect(result[0].leads).toBe(3)
  })

  it("не увеличивает leads, если дата ручного лида отличается", () => {
      const mainData = [
        {
          date: "2026-07-01",
          campaignName: "Search Brand",
          keywordText: "купить crm",
          leads: 2,
        }
      ]
      const missedLeads = [
        {
          id: '1',
          leadDate: "2026-07-02T12:30:00",
          campaignName: "Search Brand",
          keywordText: 'купить crm',
        }
      ]
      const result = mergeMissedLeads(mainData, missedLeads)

      expect(result[0].leads).toBe(2)
  })

  it("не увеличивает leads, если кампания ручного лида отличается", () => {
      const mainData = [
        {
          date: "2026-07-01",
          campaignName: "Search",
          keywordText: "купить crm",
          leads: 2,
        }
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
  })

  it("не увеличивает leads, если ключ ручного лида отличается", () => {
      const mainData = [
        {
          date: "2026-07-01",
          campaignName: "Search Brand",
          keywordText: "купить",
          leads: 2,
        }
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
  })

  it("увеличивает leads на 2, если есть два совпадающих ручных лида", () => {
      const mainData = [
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
          keywordText: 'купить crm',
        },
      ]
      const result = mergeMissedLeads(mainData, missedLeads)

      expect(result[0].leads).toBe(4)
  })

  //пока не будем добавлять такой тест
  it.todo("не добавляет один ручной лид в несколько строк")

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
})