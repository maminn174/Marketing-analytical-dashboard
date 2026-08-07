export const mergeMissedLeads = (mainData, missedLeads) => {
  const manualLeadRows = missedLeads.map((missedLead) => {
    return {
      id: `manual-${missedLead.id}`,
      date: missedLead.leadDate.slice(0, 10),
      source: "manual",
      campaignName: missedLead.campaignName,
      regionName: "",
      keywordText: missedLead.keywordText?.trim() ?? "",
      impressions: 0,
      clicks: 0,
      spend: 0,
      leads: 1,
      qualifiedLeads: 0,
      avgImpressionPosition: 0,
      sales: 0,
      isManualLead: true,
    }
  })
  return [
    ...mainData,
    ...manualLeadRows,
  ]
}
