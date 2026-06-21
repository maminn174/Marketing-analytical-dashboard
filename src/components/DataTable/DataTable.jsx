import './DataTable.scss'

const DataTable = ({ data }) => {
  return (
    <div className="data-table__wrapper">
      <table className="data-table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Источник</th>
          <th>Кампания</th>
          <th>Регион</th>
          <th>Показы</th>
          <th>Клики</th>
          <th>Расход</th>
          <th>Лиды</th>
          <th>Квал. лиды</th>
          <th>Продажи</th>
          <th>Выручка</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, date, source, campaign, region, impressions, clicks, spend, leads, qualifiedLeads, sales, revenue }) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{source}</td>
            <td>{campaign}</td>
            <td>{region}</td>
            <td>{impressions}</td>
            <td>{clicks}</td>
            <td>{spend}</td>
            <td>{leads}</td>
            <td>{qualifiedLeads}</td>
            <td>{sales}</td>
            <td>{revenue}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default DataTable
