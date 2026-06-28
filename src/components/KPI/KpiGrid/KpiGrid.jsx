import './KpiGrid.scss'
import KpiCard from "../KpiCard";
import { formatNumber, formatCurrency, formatPercent } from '../../../utils/formatters'

const KpiGrid = (props) => {
  const {
    metrics,
  } = props

  return (
    <div className="kpi-grid">
      <KpiCard title="Общий расход" value={formatCurrency(metrics.totalSpend)} />
      <KpiCard title="Лиды" value={formatNumber(metrics.totalLeads)} />
      <KpiCard title="Квал. лиды" value={formatNumber(metrics.totalQualifiedLeads)} />
      <KpiCard title="Продажи" value={formatNumber(metrics.totalSales)} />
      <KpiCard title="CPL" value={formatCurrency(metrics.cpl.toFixed(0))} />
      <KpiCard title="CPQL" value={formatCurrency(metrics.cpql.toFixed(0))} />
      <KpiCard title="CR в квал. лид" value={formatPercent(metrics.qualifiedLeadCr)} />
      <KpiCard title="Сред. позиция" value={metrics.avgImpressionPosition.toFixed(1)} />
    </div>
  )
}

export default KpiGrid
