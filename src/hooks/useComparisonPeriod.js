import { useState, useEffect } from "react";
import { getPreviousEqualPeriod } from "../utils/comparisonPeriodUtils";

export const useComparisonPeriod = ({startDate, endDate}) => {
  const [comparisonPreset, setComparisonPreset] = useState(null)
  const [comparisonStartDate, setComparisonStartDate] = useState(null)
  const [comparisonEndDate, setComparisonEndDate] = useState(null)

  const applyPreviousEqualPeriod = () => {
    const applyPeriod = getPreviousEqualPeriod(startDate, endDate)
    if (!applyPeriod) {
      resetComparison()
      return
    }

    setComparisonPreset("previous-equal")
    setComparisonStartDate(applyPeriod.startDate)
    setComparisonEndDate(applyPeriod.endDate)
  }


  const resetComparison = () => {
    setComparisonPreset(null)
    setComparisonStartDate(null)
    setComparisonEndDate(null)
  }

  useEffect(() => {
    if (comparisonPreset !== "previous-equal") {
      return
    }

    const applyPeriod = getPreviousEqualPeriod(startDate, endDate)

    if (!applyPeriod) {
      return
    }

    setComparisonStartDate(applyPeriod.startDate)
    setComparisonEndDate(applyPeriod.endDate)
  }, [startDate, endDate, comparisonPreset]);

  return {
    comparisonPreset,
    comparisonStartDate,
    comparisonEndDate,
    applyPreviousEqualPeriod,
    resetComparison
  }
}