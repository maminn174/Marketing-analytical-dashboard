import { useState } from "react";
import './App.scss'
import DataTable from "./components/DataTable";
import {missedLeadsMockData, mockData} from "./data/mockData";
import { calculateMetrics } from "./utils/calculateMetrics";
import KpiGrid from './components/KPI/KpiGrid/KpiGrid'
import {mergeMissedLeads} from "./utils/mergeMissedLeads";
import Papa from 'papaparse'
import isDateInRange from "./utils/periodUtils";

const ALL_REGIONS = "Все регионы"
const ALL_DATES = "Все время"
const ALL_CAMPAIGNS = "Все кампании"

const App = () => {
  const [mainData, setMainData] = useState(mockData)
  const [missedLeadsData, setMissedLeadsData] = useState(missedLeadsMockData)

  const mergedData = mergeMissedLeads(mainData, missedLeadsData)

  const [selectedRegion, setSelectedRegion] = useState(ALL_REGIONS)
  const [selectedDate, setSelectedDate] = useState(ALL_DATES)
  const [selectedCampaign, setSelectedCampaign] = useState(ALL_CAMPAIGNS)

  const regions = [ALL_REGIONS, ...new Set(mergedData.map((item) => item.region))]
  const dates = [ALL_DATES, ...new Set(mergedData.map((item) => item.date))]
  const campaigns = [ALL_CAMPAIGNS, ...new Set(mergedData.map((item) => item.campaign))]

  const filteredData = mergedData.filter((item) => {
    const regionMatch = selectedRegion === ALL_REGIONS || item.region === selectedRegion
    const dateMatch = selectedDate === ALL_DATES || item.date === selectedDate
    const campaignMatch = selectedCampaign === ALL_CAMPAIGNS || item.campaign === selectedCampaign

    return regionMatch && dateMatch && campaignMatch
  })

  const metrics = calculateMetrics(filteredData)

  const handleMainFileChange = async (event) => {
    const file = event.target.files[0]

    if (!file) {
      return
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data
        const dataWithoutTotal = parsedData.filter((item) => item["Название кампании"] !== 'Итого')
        const mappedData = dataWithoutTotal.map((row, index) => mapMainCsvRow(row, index))
        const normalizedData = mappedData.map((row) => normalizeMainRow(row))
        setMainData(normalizedData)
      }
    })
  }
  const handleMissedLeadsFileChange = async (event) => {
    const file = event.target.files[0]

    if (!file) {
      return
    }

    const text = await file.text()
    console.log(text)
  }

  const parseCsvNumber = (value) => {
    if (value === undefined || value === null || value === "") {
      return 0
    }

    return Number(
      String(value)
        .replace(/\s/g, "")
        .replace("₽", "")
        .replace("%", "")
        .replace(",", ".")
        .replace(/"/g, "")
    )
  }

  const normalizeMainRow = (row) => {
    const numericFields = [
      "id",
      "spend",
      "clicks",
      "directConversions",
      "impressions",
      "avgBidPerClick",
      "avgImpressionPosition",
      "leads",
      "qualifiedLeads",
      "sales",
    ]
    const normalizedRow = {...row}
    numericFields.forEach((field) => {
      normalizedRow[field] = parseCsvNumber(normalizedRow[field])
    })
    return normalizedRow
  }

  const mapMainCsvRow = (row, index) => {
    return {
      id: index + 1,
      date: row["День"],
      campaign: row["Название кампании"],
      groupName: row["Название группы"],
      keyword: row["Ключевая фраза"],
      source: "Яндекс Директ",
      leads: 0,
      qualifiedLeads: 0,
      sales: 0,
      region: "Не указан",
      spend: row["Расход, ₽"],
      clicks: row["Клики"],
      directConversions: row["Конверсии"],
      impressions: row["Показы"],
      avgBidPerClick: row["Ср. ставка за клик, ₽"],
      avgImpressionPosition: row["Ср. позиция показа"],
    }
  }

  const startDate = '20.06.2025'
  const date = '18.06.2025'
  const endDate = '24.06.2025'

  console.log(isDateInRange(startDate, date, endDate))


  return (
    <div className="app">
      <h1 className="app__title">Маркетинговый дашборд</h1>
      <div className="upload">
        <label>
          Файл Директа
          <input
            type="file"
            accept=".csv"
            onChange={handleMainFileChange}
          />
        </label>
        <label>
          Неучтенные лиды
          <input
            type="file"
            accept=".csv"
            onChange={handleMissedLeadsFileChange}
          />
        </label>
      </div>
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
          Дата:
          <select
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          >
            {dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </label>
        <label>
          Кампания:
          <select
            value={selectedCampaign}
            onChange={(event) => setSelectedCampaign(event.target.value)}
          >
            {campaigns.map((campaign) => (
              <option key={campaign} value={campaign}>
                {campaign}
              </option>
            ))}
          </select>
        </label>
      </div>
      <KpiGrid metrics={metrics} />
      <DataTable data={filteredData} />
    </div>
  )
}

export default App
