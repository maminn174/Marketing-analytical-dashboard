export type DirectStatsRow = {
  id: string | number
  date: string
  campaignId?: string
  campaignName: string
  adGroupId?: string
  adGroupName: string
  criteriaType?: string
  keywordText?: string | null
  regionId?: string
  regionName?: string
  deviceType?: string
  spend: number
  clicks: number
  directConversions: number
  leads: number
  qualifiedLeads: number
  sales: number
  impressions: number
  avgBidPerClick: number
  avgImpressionPosition: number
}

export type ManualLead = {
  id: string
  leadDate: string
  campaignName: string
  appealType: 'CALL' | 'PHONE_CLICK' | 'FORM' | 'QUIZ' | 'MESSENGER' | 'OTHER'
  keywordText?: string | null
  metrikaUrl?: string | null
  amoDealUrl: string
  comment?: string | null
  createdAt?: string
  updatedAt?: string
}

export type DashBoardRow = DirectStatsRow & {
  source?: string
  isManualLead?: boolean
}

export type DashBoardMetrics = {
  totalSpend: number
  totalLeads: number
  totalQualifiedLeads: number
  totalSales: number
  cpl: number
  cpql: number
  qualifiedLeadCr: number
  avgImpressionPosition: number

}