import dayjs from "dayjs";
export type ComparisonPeriod = {
  startDate: Date | null
  endDate: Date | null
}

export const getPreviousEqualPeriod = (
  startDate: Date | null,
  endDate: Date | null,
): ComparisonPeriod => {

  if (!startDate || !endDate) {
    return {
      startDate: null,
      endDate: null,
    }
  }

  const start = dayjs(startDate)
  const end = dayjs(endDate)

  const duration = end.diff(start, "day") + 1

  const compareEnd = start.subtract(1, "day")
  const compareStart = compareEnd.subtract(duration - 1, "day")


  return {
    startDate: compareStart.toDate(),
    endDate: compareEnd.toDate(),
  }
}

export const getPreviousMonthPeriod = (
  startDate: Date | null,
  endDate: Date | null,
): ComparisonPeriod => {
  if (!startDate || !endDate) {
    return {
      startDate: null,
      endDate: null,
    }
  }

  const start = dayjs(startDate)
  const end = dayjs(endDate)

  const compareStart = start.subtract(1, 'month')
  const compareEnd = end.subtract(1, 'month')


  return {
    startDate: compareStart.toDate(),
    endDate: compareEnd.toDate(),
  }
}

export const getPreviousYearPeriod = (
  startDate: Date | null,
  endDate: Date | null,
): ComparisonPeriod => {
  if (!startDate || !endDate) {
    return {
      startDate: null,
      endDate: null,
    }
  }

  const start = dayjs(startDate)
  const end = dayjs(endDate)

  const compareStart = start.subtract(1, 'year')
  const compareEnd = end.subtract(1, 'year')


  return {
    startDate: compareStart.toDate(),
    endDate: compareEnd.toDate(),
  }
}