import isDateInRange from "./periodUtils.js"

export const filterDashboardData = ({
                                      data,
                                      selectedRegion,
                                      selectedCampaign,
                                      allRegionsLabel,
                                      allCampaignsLabel,
                                      startDate,
                                      endDate,
                                    }) => {
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
