import './App.scss'
import DataTable from "./components/DataTable";
import { mockData } from "./data/mockData";
import { calculateMetrics } from "./utils/calculateMetrics";
import KpiGrid from './components/KPI/KpiGrid/KpiGrid'
import {useState} from "react";



const App = () => {
  const metrics = calculateMetrics(mockData)

  const [selectedRegion, setSelectedRegion] = useState("Все регионы")
  const [selectedMonth, setSelectedMonth] = useState("Все время")
  const regions = ["Все регионы", ...new Set(mockData.map((item) => item.region))]
  const months = ["Все время", ...new Set(mockData.map((item) => item.date))]

  const filteredData = mockData.filter((item) => {
    const regionMatch =
      selectedRegion === "Все регионы" || item.region === selectedRegion

    const monthMatch =
      selectedMonth === "Все время" || item.date === selectedMonth

    return regionMatch && monthMatch
  })


  return (
    <div className="app">
      <h1 className="app__title">Маркетинговый дашборд</h1>
      <KpiGrid metrics={metrics} />
      <div className="filters">
        <label>
          Регион:
          <select
            value={selectedRegion}
            onChange={(event) => setSelectedRegion(event.target.value)}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>
        <label>
          Месяц:
          <select
            value={selectedMonth}
            onChange={(event) => setSelectedMonth(event.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>
      <DataTable data={filteredData} />
    </div>
  )
}

export default App
