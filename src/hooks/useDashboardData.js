import { useState } from "react";
import { missedLeadsMockData } from "../data/mockData";
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
  comparisonStartDate,
  comparisonEndDate,
}) => {
  const [mainData, setMainData] = useState([])
  const [missedLeadsData, setMissedLeadsData] = useState(missedLeadsMockData)

  const mergedData = mergeMissedLeads(mainData, missedLeadsData)

  const regions = getUniqueOptions(mergedData, "regionName", ALL_REGIONS)
  const campaigns = getUniqueOptions(mergedData, "campaignName", ALL_CAMPAIGNS)

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

  const hasComparisonPeriod = Boolean(comparisonStartDate && comparisonEndDate)

  const comparisonFilteredData = hasComparisonPeriod
    ? filterDashboardData({
    data: mergedData,
    selectedRegion,
    selectedCampaign,
    allRegionsLabel: ALL_REGIONS,
    allCampaignsLabel: ALL_CAMPAIGNS,
    startDate: comparisonStartDate,
    endDate: comparisonEndDate,
  })
    : []

  const comparisonMetrics = hasComparisonPeriod ? calculateMetrics(comparisonFilteredData) : null

  return {
    mainData,
    setMainData,
    missedLeadsData,
    setMissedLeadsData,
    regions,
    campaigns,
    filteredData,
    metrics,
    comparisonFilteredData,
    comparisonMetrics,
  }
}
