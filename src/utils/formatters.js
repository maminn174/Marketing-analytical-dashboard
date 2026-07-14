export const formatNumber = (value) => (value ?? 0).toLocaleString("ru-RU")
export const formatCurrency = (value) => `${formatNumber(Math.round(value ?? 0))} ₽`
export const formatPercent = (value) => `${(value ?? 0).toFixed(0)}%`
export const formatPosition = (value) => (value > 0 ? value.toFixed(1) : "-")
export const formatDeltaPercent = (value) => {
  if (value === null || value === undefined) {
    return null
  }

  if (value === 0) {
    return `${value}%`
  }

  return value > 0 ? `+${value.toFixed(0)}%` : `${value.toFixed(0)}%`
}