import './DataTable.scss'
import { formatNumber, formatPosition, formatCurrency, formatPercent } from '@/utils/formatters'

const DataTable = ({ data }) => {
  return (
    <div className="data-table__wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Источник</th>
            <th>Кампания</th>
            <th>Ключ</th>
            <th>Регион</th>
            <th>Показы</th>
            <th>Клики</th>
            <th>Расход</th>
            <th>Лиды</th>
            <th>CPL</th>
            <th>Квал. лиды</th>
            <th>CPQL</th>
            <th>CR в квал.</th>
            <th>Сред. позиция</th>
            <th>Продажи</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const {
              id,
              date,
              source,
              campaignName,
              regionName,
              impressions,
              clicks,
              keywordText,
              spend,
              leads,
              qualifiedLeads,
              avgImpressionPosition,
              sales
            } = item
            const qualifiedLeadCr = leads > 0 ? (qualifiedLeads / leads) * 100 : 0
            const cpl = leads > 0 ? (spend/leads) : null
            const cpql = qualifiedLeads > 0 ? (spend/qualifiedLeads) : null

            const shouldShowCplDash = leads === 0 || item.isManualLead
            const shouldShowCpqlDash = qualifiedLeads === 0 || item.isManualLead

            const normalizedKeywordText = keywordText?.trim() ?? ""
            const normalizedRegionName = regionName?.trim() ?? ""
            const displayedKeywordText = normalizedKeywordText || "Не определен"
            const displayedRegionName = normalizedRegionName || "Не определен"

            return (
              <tr
                className={item.isManualLead ? "data-table__row--manual" : ""}
                key={id}
              >
                <td>{date}</td>
                <td>{source}</td>
                <td>{campaignName}</td>
                <td>{displayedKeywordText}</td>
                <td>{displayedRegionName}</td>
                <td>{formatNumber(impressions)}</td>
                <td>{formatNumber(clicks)}</td>
                <td>{formatCurrency(spend)}</td>
                <td>{formatNumber(leads)}</td>
                <td>{shouldShowCplDash ? "-" : formatCurrency(cpl.toFixed(0))}</td>
                <td>{formatNumber(qualifiedLeads)}</td>
                <td>{shouldShowCpqlDash ? "-" : formatCurrency(cpql.toFixed(0))}</td>
                <td>{formatPercent(qualifiedLeadCr)}</td>
                <td>{formatPosition(avgImpressionPosition)}</td>
                <td>{formatNumber(sales)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
