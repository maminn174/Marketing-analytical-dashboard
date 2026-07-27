export const mergeMissedLeads = (mainData, missedLeads) => {
  return mainData.map((item) => {
   const foundLeads = missedLeads.reduce((count, missedLead) => {
     const manualLeadDate = missedLead.leadDate.slice(0, 10)
     if (item.campaignName === missedLead.campaignName && item.keywordText === missedLead.keywordText && item.date === manualLeadDate) {
        return count + 1
      }
      return count
    }, 0)
    return {
     ...item,
      leads: item.leads + foundLeads
    }
  })
}
