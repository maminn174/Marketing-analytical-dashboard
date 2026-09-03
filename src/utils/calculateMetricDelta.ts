export type MetricDelta = {
  percentDelta: number | null
}

export const calculateMetricDelta = (
  currentValue: number | null | undefined,
  comparisonValue: number | null | undefined,
): MetricDelta => {
  if (
    currentValue === null ||
    currentValue === undefined ||
    comparisonValue === null ||
    comparisonValue === undefined ||
    comparisonValue === 0
  ) {
    return {
      percentDelta: null,
    }
  }

  return {
    percentDelta: ((currentValue - comparisonValue) / comparisonValue) * 100,
  }
}