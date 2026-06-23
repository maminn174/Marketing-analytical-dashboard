const campaigns = [
  {
    source: 'Яндекс Директ',
    campaign: 'Поиск | Брендовые запросы',
    region: 'Москва',
    baseImpressions: 14800,
    clickRate: 0.052,
    cpc: 42,
    leadRate: 0.078,
    qualifiedRate: 0.72,
    saleRate: 0.34,
    averageCheck: 62000,
  },
  {
    source: 'Яндекс Директ',
    campaign: 'Поиск | Коммерческие запросы',
    region: 'Санкт-Петербург',
    baseImpressions: 12600,
    clickRate: 0.046,
    cpc: 48,
    leadRate: 0.069,
    qualifiedRate: 0.67,
    saleRate: 0.29,
    averageCheck: 58000,
  },
  {
    source: 'Яндекс Директ',
    campaign: 'РСЯ | Ретаргетинг',
    region: 'Москва',
    baseImpressions: 24200,
    clickRate: 0.018,
    cpc: 27,
    leadRate: 0.052,
    qualifiedRate: 0.61,
    saleRate: 0.24,
    averageCheck: 54000,
  },
  {
    source: 'VK Ads',
    campaign: 'Лид-формы | Холодная аудитория',
    region: 'Казань',
    baseImpressions: 18600,
    clickRate: 0.024,
    cpc: 31,
    leadRate: 0.061,
    qualifiedRate: 0.55,
    saleRate: 0.2,
    averageCheck: 47000,
  },
  {
    source: 'VK Ads',
    campaign: 'Look-alike | Покупатели',
    region: 'Краснодар',
    baseImpressions: 16400,
    clickRate: 0.027,
    cpc: 29,
    leadRate: 0.058,
    qualifiedRate: 0.58,
    saleRate: 0.22,
    averageCheck: 45000,
  },
  {
    source: 'Авито',
    campaign: 'Премиум-размещение',
    region: 'Екатеринбург',
    baseImpressions: 7600,
    clickRate: 0.039,
    cpc: 36,
    leadRate: 0.089,
    qualifiedRate: 0.7,
    saleRate: 0.31,
    averageCheck: 52000,
  },
  {
    source: 'Telegram Ads',
    campaign: 'Каналы про бизнес',
    region: 'Новосибирск',
    baseImpressions: 11200,
    clickRate: 0.022,
    cpc: 54,
    leadRate: 0.047,
    qualifiedRate: 0.63,
    saleRate: 0.27,
    averageCheck: 56000,
  },
  {
    source: 'SEO',
    campaign: 'Органический трафик',
    region: 'Санкт-Петербург',
    baseImpressions: 9800,
    clickRate: 0.061,
    cpc: 0,
    leadRate: 0.054,
    qualifiedRate: 0.66,
    saleRate: 0.26,
    averageCheck: 50000,
  },
  {
    source: 'Email',
    campaign: 'Реактивация базы',
    region: 'Москва',
    baseImpressions: 5200,
    clickRate: 0.082,
    cpc: 3,
    leadRate: 0.092,
    qualifiedRate: 0.74,
    saleRate: 0.36,
    averageCheck: 61000,
  },
  {
    source: '2GIS',
    campaign: 'Карточка компании',
    region: 'Нижний Новгород',
    baseImpressions: 6800,
    clickRate: 0.033,
    cpc: 18,
    leadRate: 0.071,
    qualifiedRate: 0.64,
    saleRate: 0.25,
    averageCheck: 43000,
  },
];

const months = [
  { value: '2026-01', days: [5, 12, 19, 26], factor: 0.82 },
  { value: '2026-02', days: [3, 10, 17, 24], factor: 0.9 },
  { value: '2026-03', days: [4, 11, 18, 25], factor: 1.04 },
  { value: '2026-04', days: [2, 9, 16, 23], factor: 1.12 },
  { value: '2026-05', days: [6, 13, 20, 27], factor: 1.18 },
  { value: '2026-06', days: [1, 8, 15, 22], factor: 1.26 },
];

const formatDate = (month, day) => `${month}-${String(day).padStart(2, '0')}`;

const roundToHundreds = (value) => Math.round(value / 100) * 100;

export const mockData = months.flatMap((month, monthIndex) =>
  campaigns.map((campaign, campaignIndex) => {
    const wave = 0.88 + ((monthIndex + campaignIndex) % 5) * 0.07;
    const impressions = Math.round(campaign.baseImpressions * month.factor * wave);
    const clicks = Math.round(impressions * campaign.clickRate);
    const spend = roundToHundreds(clicks * campaign.cpc);
    const leads = Math.max(1, Math.round(clicks * campaign.leadRate));
    const qualifiedLeads = Math.max(1, Math.round(leads * campaign.qualifiedRate));
    const sales = Math.max(0, Math.round(qualifiedLeads * campaign.saleRate));
    const revenue = sales * campaign.averageCheck;

    return {
      id: monthIndex * campaigns.length + campaignIndex + 1,
      date: formatDate(month.value, month.days[campaignIndex % month.days.length]),
      month: month.value,
      source: campaign.source,
      campaign: campaign.campaign,
      region: campaign.region,
      impressions,
      clicks,
      spend,
      leads,
      qualifiedLeads,
      sales,
      revenue,
    };
  })
);
