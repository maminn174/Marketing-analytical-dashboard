import { useState } from "react";
import DataTable from "./components/DataTable";
import KpiGrid from './components/KPI/KpiGrid'
import { ALL_REGIONS, ALL_CAMPAIGNS } from "./constants/dashboardFilters";
import DashboardFilters from "./components/DashboardFilters";
import DateRangeControls from "./components/DateRangeControls";
import { useDateRange } from "./hooks/useDateRange";
import { useDashboardData } from "./hooks/useDashboardData";
import { useComparisonPeriod } from "./hooks/useComparisonPeriod";
import ComparisonPeriodControls from '/src/components/ComparisonPeriodControls'
import './App.scss'
import {Button, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import ManualLeadForm from "@/components/ManualLeadForm";

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
     resetComparison,
     applyCustomComparisonPeriod,
     applyComparisonPreset,
   } = useComparisonPeriod({ startDate, endDate })

  const {
    regions,
    campaigns,
    filteredData,
    metrics,
    comparisonMetrics,
    setMissedLeadsData,
  } = useDashboardData({
    selectedRegion,
    selectedCampaign,
    startDate,
    endDate,
    comparisonStartDate,
    comparisonEndDate,
  })

  const [opened, { open, close }] = useDisclosure(false);

  const handleLeadCreated = (createdLead) => {
    setMissedLeadsData((currentLeads) => [...currentLeads, createdLead])
  }

  return (
    <div className="app">

      <h1 className="app__title">Маркетинговый дашборд</h1>
      
      <Modal opened={opened} onClose={close}>
        <ManualLeadForm
          campaigns={campaigns}
          onLeadCreated={handleLeadCreated}
        />
      </Modal>
      <Button variant="default" onClick={open}>
        Добавить лид
      </Button>

      <DateRangeControls
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onDateClick={handleDateClick}
      />
      <ComparisonPeriodControls onPresetSelect={applyComparisonPreset} onCustomRangeSelect={applyCustomComparisonPeriod} onReset={resetComparison} />

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
