import type { DashBoardRow } from "@/types/dashboard";

type RawCsvRow = Record<string, string | number | null | undefined>

export const parseCsvNumber = (
  value: string | number | null | undefined,
  ): number => {
  if (value === undefined || value === null || value === "") {
    return 0
  }

  return Number(
    String(value)
      .replace(/\s/g, "")
      .replace("₽", "")
      .replace("%", "")
      .replace(",", ".")
      .replace(/"/g, "")
  )
}

export const normalizeMainRow = (row: DashBoardRow): DashBoardRow => {
  return {
    ...row,
    id: parseCsvNumber(row.id),
    spend: parseCsvNumber(row.spend),
    clicks: parseCsvNumber(row.clicks),
    directConversions: parseCsvNumber(row.directConversions),
    impressions: parseCsvNumber(row.impressions),
    avgBidPerClick: parseCsvNumber(row.avgBidPerClick),
    avgImpressionPosition: parseCsvNumber(row.avgImpressionPosition),
    leads: parseCsvNumber(row.leads),
    qualifiedLeads: parseCsvNumber(row.qualifiedLeads),
    sales: parseCsvNumber(row.sales),
  }
}


export const mapMainCsvRow = (row: RawCsvRow, index: number): DashBoardRow => {
  return {
    id: index + 1,
    date: String(row["День"]),
    campaignName: String(row["Название кампании"] ?? ""),
    adGroupName: String(row["Название группы"] ?? ""),
    keywordText: String(row["Ключевая фраза"] ?? ""),
    source: "Яндекс Директ",
    leads: 0,
    qualifiedLeads: 0,
    sales: 0,
    regionName: "Не указан",
    spend: parseCsvNumber(row["Расход, ₽"]),
    clicks: parseCsvNumber(row["Клики"]),
    directConversions: parseCsvNumber(row["Конверсии"]),
    impressions: parseCsvNumber(row["Показы"]),
    avgBidPerClick: parseCsvNumber(row["Ср. ставка за клик, ₽"]),
    avgImpressionPosition: parseCsvNumber(row["Ср. позиция показа"]),
  }
}
