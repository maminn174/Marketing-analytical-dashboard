import { useState } from "react";
import './App.scss'
import DataTable from "./components/DataTable";
import KpiGrid from './components/KPI/KpiGrid'
import { ALL_REGIONS, ALL_CAMPAIGNS } from "./constants/dashboardFilters";
import DashboardFilters from "./components/DashboardFilters";
import DateRangeControls from "./components/DateRangeControls";
import { useDateRange } from "./hooks/useDateRange";
import { useDashboardData } from "./hooks/useDashboardData";

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
    regions,
    campaigns,
    filteredData,
    metrics,
  } = useDashboardData({
    selectedRegion,
    selectedCampaign,
    startDate,
    endDate,
  })

  return (
    <div className="app">
      <h1 className="app__title">Маркетинговый дашборд</h1>

      <DateRangeControls
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onDateClick={handleDateClick}
      />

      <DashboardFilters
        regions={regions}
        campaigns={campaigns}
        selectedRegion={selectedRegion}
        selectedCampaign={selectedCampaign}
        onRegionChange={setSelectedRegion}
        onCampaignChange={setSelectedCampaign}
      />

      <KpiGrid metrics={metrics} />
      <DataTable data={filteredData} />
    </div>
  )
}

export default App
