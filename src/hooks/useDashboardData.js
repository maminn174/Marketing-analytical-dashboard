import { useState } from "react";
import { mockData, missedLeadsMockData } from "../data/mockData";
import { mergeMissedLeads } from "../utils/mergeMissedLeads";
import { filterDashboardData } from "../utils/filterDashboardData";
import { calculateMetrics } from "../utils/calculateMetrics";
import { getUniqueOptions } from "../utils/getUniqueOptions";
import { ALL_REGIONS, ALL_CAMPAIGNS } from "../constants/dashboardFilters";

export const useDashboardData = ({
                                   selectedRegion,
                                   selectedCampaign,
                                   startDate,
                                   endDate,
                                 }) => {
  const [mainData, setMainData] = useState(mockData)
  const [missedLeadsData, setMissedLeadsData] = useState(missedLeadsMockData)

  const mergedData = mergeMissedLeads(mainData, missedLeadsData)

  const regions = getUniqueOptions(mergedData, "region", ALL_REGIONS)
  const campaigns = getUniqueOptions(mergedData, "campaign", ALL_CAMPAIGNS)

  const filteredData = filterDashboardData({
    data: mergedData,
    selectedRegion,
    selectedCampaign,
    allRegionsLabel: ALL_REGIONS,
    allCampaignsLabel: ALL_CAMPAIGNS,
    startDate,
    endDate,
  })

  const metrics = calculateMetrics(filteredData)

  return {
    mainData,
    setMainData,
    missedLeadsData,
    setMissedLeadsData,
    regions,
    campaigns,
    filteredData,
    metrics,
  }
}