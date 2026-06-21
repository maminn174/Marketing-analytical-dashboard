export const calculateMetrics = (data) => {
  const totalSpend = data.reduce((sum, item) => {
    return sum + item.spend;
  }, 0);

  const totalLeads = data.reduce((sum, item) => {
    return sum + item.leads;
  }, 0);

  const totalQualifiedLeads = data.reduce((sum, item) => {
    return sum + item.qualifiedLeads;
  }, 0);

  const totalSales = data.reduce((sum, item) => {
    return sum + item.sales;
  }, 0);

  const totalRevenue = data.reduce((sum, item) => {
    return sum + item.revenue;
  }, 0);

  const cpl = totalLeads > 0 ? totalSpend / totalLeads : 0;

  const cpql = totalQualifiedLeads > 0 ? totalSpend / totalQualifiedLeads : 0;

  const romi = totalSpend > 0 ? ((totalRevenue - totalSpend) / totalSpend) * 100 : 0;

  return {
    totalSpend,
    totalLeads,
    totalQualifiedLeads,
    totalSales,
    totalRevenue,
    cpl,
    cpql,
    romi
  };
}