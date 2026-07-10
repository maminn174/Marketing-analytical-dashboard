const DashboardFilters = ({
  regions,
  campaigns,
  selectedRegion,
  selectedCampaign,
  onRegionChange,
  onCampaignChange,
}) => {
  return (
    <div className="filters">
      <label>
        Регион:
        <select
          value={selectedRegion}
          onChange={(event) => onRegionChange(event.target.value)}
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>

      <label>
        Кампания:
        <select
          value={selectedCampaign}
          onChange={(event) => onCampaignChange(event.target.value)}
        >
          {campaigns.map((campaign) => (
            <option key={campaign} value={campaign}>
              {campaign}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default DashboardFilters
