import './KpiGrid.scss'
import KpiCard from "../KpiCard";

const KpiGrid = (props) => {
  const {
    metrics,
  } = props

  return (
    <div className="kpi-grid">
      <KpiCard title="Общий расход" value={`${metrics.totalSpend} ₽`} />
      <KpiCard title="Лиды" value={metrics.totalLeads} />
      <KpiCard title="Квал. лиды" value={metrics.totalQualifiedLeads} />
      <KpiCard title="Продажи" value={metrics.totalSales} />
      <KpiCard title="Выручка" value={`${metrics.totalRevenue} ₽`} />
      <KpiCard title="CPL" value={`${metrics.cpl.toFixed(0)} ₽`} />
      <KpiCard title="CPQL" value={`${metrics.cpql.toFixed(0)} ₽`} />
      <KpiCard title="ROMI" value={`${metrics.romi.toFixed(1)}%`} />
    </div>
  )
}

export default KpiGrid
