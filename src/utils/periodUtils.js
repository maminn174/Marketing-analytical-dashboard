const parseDate = (date) => {
  const splitDate = date.split('.')
  const day = Number(splitDate[0])
  const month = Number(splitDate[1])
  const year = Number(splitDate[2])

  return new Date(year, month - 1, day)
}

const isDateInRange = (date, startDate, endDate) => {
  const parsedDate = parseDate(date)
  const parsedStartDate = parseDate(startDate)
  const parsedEndDate = parseDate(endDate)

  if (parsedDate >= parsedStartDate && parsedDate <= parsedEndDate) {
    return true
  }
  return false
}

export default isDateInRange