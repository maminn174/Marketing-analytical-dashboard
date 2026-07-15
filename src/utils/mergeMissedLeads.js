export const mergeMissedLeads = (mainData, missedLeads) => {
  return mainData.map((item) => {
   const foundLeads = missedLeads.reduce((count, missedLead) => {
      if (item.campaignName === missedLead.campaignName && item.keywordText === missedLead.keywordText) {
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
