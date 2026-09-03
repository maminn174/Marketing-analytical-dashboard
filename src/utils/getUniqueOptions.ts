import type { DashBoardRow } from "@/types/dashboard";

export const getUniqueOptions = (
  data: DashBoardRow[],
  fieldName: keyof DashBoardRow,
  allLabel: string,
): string[] => {
  return [
    allLabel,
    ...new Set(
      data
        .map((item) => item[fieldName])
        .filter((value): value is string => typeof value === 'string' && value.length > 0),
    ),
  ]
}