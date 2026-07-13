import { useState } from "react";
import './App.scss'
import DataTable from "./components/DataTable";
import KpiGrid from './components/KPI/KpiGrid'
import { ALL_REGIONS, ALL_CAMPAIGNS } from "./constants/dashboardFilters";
import DashboardFilters from "./components/DashboardFilters";
import DateRangeControls from "./components/DateRangeControls";
import { useDateRange } from "./hooks/useDateRange";
import { useDashboardData } from "./hooks/useDashboardData";
import { useComparisonPeriod } from "./hooks/useComparisonPeriod";
import ComparisonPeriodControls from '/src/components/ComparisonPeriodControls'
const App = () => {

  const [selectedRegion, setSelectedRegion] = useState(ALL_REGIONS)
  const [selectedCampaign, setSelectedCampaign] = useState(ALL_CAMPAIGNS)

  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleDateClick,
  } = useDateRange()

   const {
     comparisonStartDate,
     comparisonEndDate,
     applyComparisonPreset,
     resetComparison,
   } = useComparisonPeriod({ startDate, endDate })

  const {
    regions,
    campaigns,
    filteredData,
    metrics,
    comparisonMetrics,
  } = useDashboardData({
    selectedRegion,
    selectedCampaign,
    startDate,
    endDate,
    comparisonStartDate,
    comparisonEndDate,
  })

  return (
    <div className="app">
      <p>
        Comparison: {comparisonStartDate} - {comparisonEndDate}
      </p>

      <h1 className="app__title">Маркетинговый дашборд</h1>

      <DateRangeControls
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onDateClick={handleDateClick}
      />
      <ComparisonPeriodControls onPresetSelect={applyComparisonPreset} onReset={resetComparison} />

      <DashboardFilters
        regions={regions}
        campaigns={campaigns}
        selectedRegion={selectedRegion}
        selectedCampaign={selectedCampaign}
        onRegionChange={setSelectedRegion}
        onCampaignChange={setSelectedCampaign}
      />

      <KpiGrid metrics={metrics} comparisonMetrics={comparisonMetrics} />
      <DataTable data={filteredData} />
    </div>
  )
}

export default App
