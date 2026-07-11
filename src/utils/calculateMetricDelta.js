export const calculateMetricDelta = (currentValue, comparisonValue) => {
  const absoluteDelta = currentValue - comparisonValue
  const percentDelta = comparisonValue !== 0
    ? (currentValue - comparisonValue) / comparisonValue * 100
    :  null

  return {
    absoluteDelta,
    percentDelta,
  }
}