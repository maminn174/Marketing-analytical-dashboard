import './KpiGrid.scss'
import KpiCard from "../KpiCard";
import {
  formatNumber,
  formatDeltaPercent,
  formatCurrency,
  formatPercent, formatPosition,
} from '@/utils/formatters'
import {calculateMetricDelta} from "@/utils/calculateMetricDelta";

const kpiCards = [
  {
    key: 'totalSpend',
    title: 'Общий расход',
    formatter: formatCurrency,
    trend: 'lower-better',
  },
  {
    key: 'totalLeads',
    title: 'Общие лиды',
    formatter: formatNumber,
    trend: 'higher-better',
  },
  {
    key: 'totalQualifiedLeads',
    title: 'Квал. лиды',
    formatter: formatNumber,
    trend: 'higher-better',
  },
  {
    key: 'totalSales',
    title: 'Продажи',
    formatter: formatNumber,
    trend: 'higher-better',
  },
  {
    key: 'cpl',
    title: 'CPL',
    formatter: formatCurrency,
    trend: 'lower-better',
  },
  {
    key: 'cpql',
    title: 'CPQL',
    formatter: formatCurrency,
    trend: 'lower-better',
  },
  {
    key: 'qualifiedLeadCr',
    title: 'CR в квал. лид',
    formatter: formatPercent,
    trend: 'higher-better',
  },
  {
    key: 'avgImpressionPosition',
    title: 'Сред. позиция',
    formatter: formatPosition,
    trend: 'lower-better',
  },
]

const getDeltaStatus = (percentDelta, trend) => {
  if (percentDelta === null || percentDelta === undefined) {
    return null
  }

  if (percentDelta === 0) {
    return 'neutral'
  }

  if (trend === 'higher-better') {
    if (percentDelta > 0) {
      return "positive"
    } else return 'negative'
  }

  if (trend === 'lower-better') {
    if (percentDelta < 0) {
      return "positive"
    } else return 'negative'
  }
}

const KpiGrid = (props) => {
  const {
    metrics,
    comparisonMetrics,
  } = props


  return (
    <div className="kpi-grid">
      {kpiCards.map(({title, key, formatter, trend}) => {
        const currentValue = metrics?.[key]
        const comparisonValue = comparisonMetrics?.[key]

        const delta = comparisonMetrics
          ? calculateMetricDelta(currentValue, comparisonValue)
          : null

        const deltaStatus = getDeltaStatus(delta?.percentDelta, trend)

        const formattedDeltaPercent = formatDeltaPercent(delta?.percentDelta)

        const percentDeltaLabel = formattedDeltaPercent === null
          ? null
          : `Разница: ${formattedDeltaPercent}`

        return (
          <KpiCard
            key={key}
            title={title}
            value={formatter(currentValue)}
            comparisonLabel={comparisonMetrics ? `Было: ${formatter(comparisonValue)}` : null}
            percentDeltaLabel={percentDeltaLabel}
            deltaStatus={deltaStatus}
          />
        )
      })}
    </div>
  )
}

export default KpiGrid
