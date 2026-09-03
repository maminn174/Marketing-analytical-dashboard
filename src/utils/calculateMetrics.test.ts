import { describe, expect, it } from "vitest"
import { calculateMetrics } from "./calculateMetrics.ts";
import type { DashBoardRow } from "@/types/dashboard";

const createRow = (overrides: Partial<DashBoardRow>): DashBoardRow => ({
  id: 1,
  date: "2026-07-01",
  campaignName: "Campaign",
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

describe("calculateMetrics", () => {
  it("считает сумму расходов и лидов", () => {
    const data = [
      createRow({
        spend: 100,
        leads: 2,
      }),
      createRow({
        spend: 300,
        leads: 3,
      }),
    ]

    const result = calculateMetrics(data)

    expect(result.totalSpend).toBe(400)
    expect(result.totalLeads).toBe(5)
  })

  it("считает CPL", () => {
    const data = [
      createRow({
        spend: 100,
        leads: 2,
      }),
      createRow({
        spend: 300,
        leads: 3,
      }),
    ]

    const result = calculateMetrics(data)

    expect(result.cpl).toBe(80)
  })

  it("считает CPQL", () => {
    const data = [
      createRow({
        spend: 100,
        leads: 2,
        qualifiedLeads: 2,
      }),
      createRow({
        spend: 300,
        leads: 3,
        qualifiedLeads: 2,
      }),
    ]

    const result = calculateMetrics(data)

    expect(result.cpql).toBe(100)
  })

  it("считает конверсию в квалифицированный лид", () => {
    const data = [
      createRow({
        spend: 100,
        leads: 2,
        qualifiedLeads: 1,
      }),
      createRow({
        spend: 300,
        leads: 3,
        qualifiedLeads: 2,
      }),
      createRow({
        spend: 300,
        leads: 5,
        qualifiedLeads: 1,
      }),
    ]

    const result = calculateMetrics(data)

    expect(result.qualifiedLeadCr).toBe(40)
  })
})