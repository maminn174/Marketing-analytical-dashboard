export const formatNumber = (value:  number | null | undefined): string => (value ?? 0).toLocaleString("ru-RU")
export const formatCurrency = (value:  number | null | undefined): string => `${formatNumber(Math.round(value ?? 0))} ₽`
export const formatPercent = (value:  number | null | undefined): string => `${(value ?? 0).toFixed(0)}%`
export const formatPosition = (value:  number | null | undefined): string =>
  typeof value === "number" && value > 0 ? value.toFixed(1): "-"
export const formatDeltaPercent = (
  value:  number | null | undefined,
): string | null => {
  if (value === null || value === undefined) {
    return null
  }

  if (value === 0) {
    return `${value}%`
  }

  return value > 0 ? `+${value.toFixed(0)}%` : `${value.toFixed(0)}%`
}