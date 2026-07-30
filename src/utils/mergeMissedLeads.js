export const mergeMissedLeads = (mainData, missedLeads) => {
  const leadsWithKeyword = missedLeads.filter((missedLead) => {
    const keywordText = missedLead.keywordText?.trim() ?? ""
    return Boolean(keywordText)
  })
  const leadsWithoutKeyword = missedLeads.filter((missedLead) => {
    const keywordText = missedLead.keywordText?.trim() ?? ""
    return !keywordText
  })

  const updatedMainData = mainData.map((item) => {
    const foundLeads = leadsWithKeyword.reduce((count, missedLead) => {
      const manualLeadDate = missedLead.leadDate.slice(0, 10)
      const missedLeadKeyword = missedLead.keywordText?.trim() ?? ""
      if (item.campaignName === missedLead.campaignName && item.keywordText === missedLeadKeyword && item.date === manualLeadDate) {
        return count + 1
      }
      return count
    }, 0)
    return {
      ...item,
      leads: item.leads + foundLeads
    }
  })

  const manualLeadRows = leadsWithoutKeyword.map((leadWithoutKeyword) => {
    return {
      id: `manual-${leadWithoutKeyword.id}`,
      date: leadWithoutKeyword.leadDate.slice(0, 10),
      source: "manual",
      campaignName: leadWithoutKeyword.campaignName,
      regionName: "",
      keywordText: "",
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
    ...updatedMainData,
    ...manualLeadRows,
  ]
}
