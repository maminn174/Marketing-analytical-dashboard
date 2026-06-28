export const formatNumber = (value) => (value ?? 0).toLocaleString("ru-RU")
export const formatCurrency = (value) => `${formatNumber(value)} ₽`
export const formatPercent = (value) => `${(value ?? 0).toFixed(1)}%`
export const formatPosition = (value) => (value > 0 ? value.toFixed(1) : "-")