

import { useState } from "react";

export const useDateRange = () => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleDateClick = (clickedDate: Date | null) => {
    if (startDate === null) {
      setStartDate(clickedDate)
      return
    }

    if (endDate === null) {
      if (clickedDate < startDate) {
        setStartDate(clickedDate)
        setEndDate(startDate)
      } else {
        setEndDate(clickedDate)
      }
      return
    }

    setStartDate(clickedDate)
    setEndDate(null)
  }

  return {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleDateClick,
  }
}