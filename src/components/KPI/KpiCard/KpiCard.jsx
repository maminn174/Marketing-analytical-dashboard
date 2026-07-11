import './KpiCard.scss'

const KpiCard = (props) => {
  const {
    title, value, absoluteDelta, percentDelta
  } = props

  return (
    <div className="kpi-card">
      <h3 className="kpi-card__title">{title}</h3>
      <p className="kpi-card__value">{value}</p>
      <p className="kpi-card__value">{absoluteDelta}</p>
      <p className="kpi-card__value">{percentDelta}</p>
    </div>
  )
}

export default KpiCard