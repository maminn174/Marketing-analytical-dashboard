import { describe, expect, it } from "vitest"
import { calculateMetrics } from "./calculateMetrics.ts";

describe("calculateMetrics", () => {
  it("считает сумму расходов и лидов", () => {
    const data = [
      {
        spend: 100,
        leads: 2,
        qualifiedLeads: 0,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
      {
        spend: 300,
        leads: 3,
        qualifiedLeads: 0,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
    ]

    const result = calculateMetrics(data)

    expect(result.totalSpend).toBe(400)
    expect(result.totalLeads).toBe(5)
  })

  it("считает CPL", () => {
    const data = [
      {
        spend: 100,
        leads: 2,
        qualifiedLeads: 0,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
      {
        spend: 300,
        leads: 3,
        qualifiedLeads: 0,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
    ]

    const result = calculateMetrics(data)

    expect(result.cpl).toBe(80)
  })

  it("считает CPQL", () => {
    const data = [
      {
        spend: 100,
        leads: 2,
        qualifiedLeads: 2,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
      {
        spend: 300,
        leads: 3,
        qualifiedLeads: 2,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
    ]

    const result = calculateMetrics(data)

    expect(result.cpql).toBe(100)
  })

  it("считает конверсию в квалифицированный лид", () => {
    const data = [
      {
        spend: 100,
        leads: 2,
        qualifiedLeads: 1,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
      {
        spend: 300,
        leads: 3,
        qualifiedLeads: 2,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
      {
        spend: 300,
        leads: 5,
        qualifiedLeads: 1,
        sales: 0,
        impressions: 0,
        avgImpressionPosition: 0,
      },
    ]

    const result = calculateMetrics(data)

    expect(result.qualifiedLeadCr).toBe(40)
  })
})