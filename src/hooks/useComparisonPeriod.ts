import { useState, useEffect } from "react";
import { getPreviousEqualPeriod, getPreviousYearPeriod, getPreviousMonthPeriod } from "@/utils/comparisonPeriodUtils";

type UseComparisonPeriodParams = {
  startDate: Date | null
  endDate: Date | null
}

export type ComparisonPreset = 'previous-equal' | 'previous-month' | 'previous-year' | 'custom'

type CalculatedComparisonPreset = Exclude<ComparisonPreset, 'custom'>

const comparisonPresetCalculators: Record<CalculatedComparisonPreset, typeof getPreviousEqualPeriod> = {
  "previous-equal": getPreviousEqualPeriod,
  "previous-month": getPreviousMonthPeriod,
  "previous-year": getPreviousYearPeriod,
}

export const useComparisonPeriod = ({startDate, endDate}: UseComparisonPeriodParams) => {
  const [comparisonPreset, setComparisonPreset] = useState<ComparisonPreset | null>(null)
  const [comparisonStartDate, setComparisonStartDate] = useState<Date | null>(null)
  const [comparisonEndDate, setComparisonEndDate] = useState<Date | null>(null)

  const resetComparison = () => {
    setComparisonPreset(null)
    setComparisonStartDate(null)
    setComparisonEndDate(null)
  }

  const applyComparisonPreset = (preset: CalculatedComparisonPreset) => {
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

  const applyCustomComparisonPeriod = (startDate, endDate) => {
    if (startDate && endDate) {
      setComparisonPreset('custom')
      setComparisonStartDate(startDate)
      setComparisonEndDate(endDate)
    }
  }

  useEffect(() => {
    if (!comparisonPreset) {
      return
    }

    if (comparisonPreset === 'custom') {
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
    resetComparison,
    applyCustomComparisonPeriod,
  }
}