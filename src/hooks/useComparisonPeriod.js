import { useState, useEffect } from "react";
import { getPreviousEqualPeriod, getPreviousYearPeriod, getPreviousMonthPeriod } from "../utils/comparisonPeriodUtils";

const comparisonPresetCalculators = {
  "previous-equal": getPreviousEqualPeriod,
  "previous-month": getPreviousMonthPeriod,
  "previous-year": getPreviousYearPeriod,
}

export const useComparisonPeriod = ({startDate, endDate}) => {
  const [comparisonPreset, setComparisonPreset] = useState(null)
  const [comparisonStartDate, setComparisonStartDate] = useState(null)
  const [comparisonEndDate, setComparisonEndDate] = useState(null)

  const resetComparison = () => {
    setComparisonPreset(null)
    setComparisonStartDate(null)
    setComparisonEndDate(null)
  }

  const applyComparisonPreset = (preset) => {
    const calculatePeriod = comparisonPresetCalculators[preset]

      if (!calculatePeriod) {
        resetComparison()
        return
      }

      const period = calculatePeriod(startDate, endDate)

      if (!period) {
        resetComparison()
        return
      }

      setComparisonPreset(preset)
      setComparisonStartDate(period.startDate)
      setComparisonEndDate(period.endDate)
  }

  useEffect(() => {
    if (!comparisonPreset) {
      return
    }

    const calculatePeriod = comparisonPresetCalculators[comparisonPreset]
    
    if (!calculatePeriod) {
      resetComparison()
      return
    }

    const period = calculatePeriod(startDate, endDate)

    if (!period) {
      resetComparison()
      return
    }

    setComparisonStartDate(period.startDate)
    setComparisonEndDate(period.endDate)
  }, [startDate, endDate, comparisonPreset]);

  return {
    comparisonPreset,
    comparisonStartDate,
    comparisonEndDate,
    applyComparisonPreset,
    resetComparison
  }
}