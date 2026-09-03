import type { DashBoardMetrics, DashBoardRow } from "@/types/dashboard";

export const calculateMetrics = (data: DashBoardRow[]): DashBoardMetrics => {
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

  const positionItems = data.filter((item) => item.avgImpressionPosition > 0);
  const positionImpressions = positionItems.reduce((sum, item) => {
    return sum + item.impressions;
  }, 0);
  const positionWeightedSum = positionItems.reduce((sum, item) => {
    return sum + item.avgImpressionPosition * item.impressions;
  }, 0);

  const cpl = totalLeads > 0 ? totalSpend / totalLeads : 0;

  const cpql = totalQualifiedLeads > 0 ? totalSpend / totalQualifiedLeads : 0;

  const qualifiedLeadCr = totalLeads > 0 ? (totalQualifiedLeads / totalLeads) * 100 : 0;

  const avgImpressionPosition =
    positionImpressions > 0 ? positionWeightedSum / positionImpressions : 0;

  return {
    totalSpend,
    totalLeads,
    totalQualifiedLeads,
    totalSales,
    cpl,
    cpql,
    qualifiedLeadCr,
    avgImpressionPosition
  };
}
