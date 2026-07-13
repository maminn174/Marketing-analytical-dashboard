import dayjs from "dayjs";

export const getPreviousEqualPeriod = (startDate, endDate) => {

  if (!startDate || !endDate) {
    return null
  }

  const start = dayjs(startDate)
  const end = dayjs(endDate)

  const duration = end.diff(start, "day") + 1

  const compareEnd = start.subtract(1, "day")
  const compareStart = compareEnd.subtract(duration - 1, "day")


  return {
    startDate: compareStart.format('YYYY-MM-DD'),
    endDate: compareEnd.format('YYYY-MM-DD'),
  }
}

export const getPreviousMonthPeriod = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return null
  }

  const start = dayjs(startDate)
  const end = dayjs(endDate)

  const compareStart = start.subtract(1, 'month')
  const compareEnd = end.subtract(1, 'month')


  return {
    startDate: compareStart.format('YYYY-MM-DD'),
    endDate: compareEnd.format('YYYY-MM-DD'),
  }
}

export const getPreviousYearPeriod = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return null
  }

  const start = dayjs(startDate)
  const end = dayjs(endDate)

  const compareStart = start.subtract(1, 'year')
  const compareEnd = end.subtract(1, 'year')


  return {
    startDate: compareStart.format('YYYY-MM-DD'),
    endDate: compareEnd.format('YYYY-MM-DD'),
  }
}