import isDateInRange from "./periodUtils.js"
import type { DashBoardRow } from "@/types/dashboard";

type FilterDashboardDataParams = {
  data: DashBoardRow[]
  selectedRegion: string
  selectedCampaign: string
  allRegionsLabel: string
  allCampaignsLabel: string
  startDate: Date | null
  endDate: Date | null
}

export const filterDashboardData = ({
                                      data,
                                      selectedRegion,
                                      selectedCampaign,
                                      allRegionsLabel,
                                      allCampaignsLabel,
                                      startDate,
                                      endDate,
                                    }: FilterDashboardDataParams): DashBoardRow[] => {
  return data.filter((item) => {
    const regionMatch =
      selectedRegion === allRegionsLabel || item.regionName === selectedRegion

    const campaignMatch =
      selectedCampaign === allCampaignsLabel || item.campaignName === selectedCampaign

    let periodMatch = true
    const today = new Date().toISOString().slice(0, 10)

    if (startDate === null && endDate === null) {
      periodMatch = true
    } else if (startDate !== null && endDate === null) {
      periodMatch = isDateInRange(item.date, startDate, today)
    } else if (startDate !== null && endDate !== null) {
      periodMatch = isDateInRange(item.date, startDate, endDate)
    } else if (startDate === null && endDate !== null) {
      periodMatch = true
    }

    return regionMatch && campaignMatch && periodMatch
  })
}
