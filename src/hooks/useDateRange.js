import { useState } from "react";

export const useDateRange = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleDateClick = (clickedDate) => {
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