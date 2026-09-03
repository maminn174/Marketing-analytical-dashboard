import { useState, useEffect } from "react";
import { mergeMissedLeads } from "@/utils/mergeMissedLeads";
import { filterDashboardData } from "@/utils/filterDashboardData";
import { calculateMetrics } from "@/utils/calculateMetrics";
import { getUniqueOptions } from "@/utils/getUniqueOptions";
import { ALL_REGIONS, ALL_CAMPAIGNS } from "@/constants/dashboardFilters";
import type { DashBoardMetrics, DashBoardRow, DirectStatsRow, ManualLead } from "@/types/dashboard";

type UseDashboardDataParams = {
  selectedRegion: string
  selectedCampaign: string
  startDate: Date | null
  endDate: Date | null
  comparisonStartDate: Date | null
  comparisonEndDate: Date | null
}

export const useDashboardData = ({
  selectedRegion,
  selectedCampaign,
  startDate,
  endDate,
  comparisonStartDate,
  comparisonEndDate,
}: UseDashboardDataParams) => {
  const [mainData, setMainData] = useState<DirectStatsRow[]>([])
  const [missedLeadsData, setMissedLeadsData] = useState<ManualLead[]>([])

  useEffect(() => {
    const loadManualLeads = async () => {
      const response = await fetch('http://localhost:3001/api/manual-leads')
      const json = await response.json() as { data: ManualLead[] }

      setMissedLeadsData(json.data)
    }

    loadManualLeads()
  }, []);

  useEffect(() => {
    const loadDirectStats = async () => {
      const response = await fetch('http://localhost:3001/api/direct-stats')
      const json = await response.json() as DirectStatsRow[]

      setMainData(json)
    }

    loadDirectStats()
  }, []);

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
