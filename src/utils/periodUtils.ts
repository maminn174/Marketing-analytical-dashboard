type DateInput = string | Date | null | undefined

const parseDate = (date: DateInput): Date | null => {
  if (!date) {
    return null
  }

  if (date instanceof Date) {
    return date
  }

  if (date.includes(".")) {
    const [day, month, year] = date.split(".").map(Number)

    return new Date(year, month - 1, day)
  }
  
  if (date.includes("-")) {
    const [year, month, day] = date.split("-").map(Number)

    return new Date(year, month - 1, day)
  }
  
  return null
}

const isDateInRange = (
  date: DateInput,
  startDate: DateInput,
  endDate: DateInput,
): boolean => {
  const parsedDate = parseDate(date)
  const parsedStartDate = parseDate(startDate)
  const parsedEndDate = parseDate(endDate)

  if (!parsedDate || !parsedStartDate || !parsedEndDate) {
    return false
  }

  return parsedDate >= parsedStartDate && parsedDate <= parsedEndDate
}

export default isDateInRange