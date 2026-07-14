import './KpiCard.scss'

const KpiCard = (props) => {
  const {
    title, value, comparisonLabel, percentDeltaLabel, deltaStatus,
  } = props

  const deltaClassName = deltaStatus
    ? `kpi-card__value kpi-card__delta kpi-card__delta--${deltaStatus}`
    : 'kpi-card__value kpi-card__delta'

  return (
    <div className="kpi-card">
      <h3 className="kpi-card__title">{title}</h3>
      <p className="kpi-card__value">{value}</p>
      {comparisonLabel && <p className="kpi-card__value">{comparisonLabel}</p>}
      {percentDeltaLabel && <p className={deltaClassName}>{percentDeltaLabel}</p>}
    </div>
  )
}

export default KpiCard