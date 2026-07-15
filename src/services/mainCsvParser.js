export const parseCsvNumber = (value) => {
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

export const normalizeMainRow = (row) => {
  const numericFields = [
    "id",
    "spend",
    "clicks",
    "directConversions",
    "impressions",
    "avgBidPerClick",
    "avgImpressionPosition",
    "leads",
    "qualifiedLeads",
    "sales",
  ]
  const normalizedRow = {...row}
  numericFields.forEach((field) => {
    normalizedRow[field] = parseCsvNumber(normalizedRow[field])
  })
  return normalizedRow
}


export const mapMainCsvRow = (row, index) => {
  return {
    id: index + 1,
    date: row["День"],
    campaignName: row["Название кампании"],
    adGroupName: row["Название группы"],
    keywordText: row["Ключевая фраза"],
    source: "Яндекс Директ",
    leads: 0,
    qualifiedLeads: 0,
    sales: 0,
    regionName: "Не указан",
    spend: row["Расход, ₽"],
    clicks: row["Клики"],
    directConversions: row["Конверсии"],
    impressions: row["Показы"],
    avgBidPerClick: row["Ср. ставка за клик, ₽"],
    avgImpressionPosition: row["Ср. позиция показа"],
  }
}
