import express from 'express'
import cors from 'cors'
import { prisma } from './prisma.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/direct-stats', async (req, res) => {
  try {
    const rows = await prisma.directDailyPhraseStat.findMany()

    const data = rows.map((row) => ({
      id: row.id,
      date: row.statDate.toISOString().slice(0, 10),
      campaignId: row.campaignId,
      campaignName: row.campaignName,
      adGroupId: row.adGroupId,
      adGroupName: row.adGroupName,
      criteriaType: row.criteriaType,
      keywordText: row.keywordText,
      regionId: row.targetRegionId,
      regionName: row.targetRegionName,
      deviceType: row.deviceType,
      spend: Number(row.spend),
      clicks: row.clicks,
      directConversions: row.directConversions,
      leads: 0,
      qualifiedLeads: 0,
      sales: 0,
      impressions: row.impressions,
      avgBidPerClick: Number(row.avgBidPerClick),
      avgImpressionPosition: Number(row.avgImpressionPosition),
    }))

    res.json(data)
  } catch {
    res.status(500).json({ message: 'Failed to load direct stats' })
  }
})

app.get('/api/manual-leads', async (req, res) => {
  try {
    const manualLeads = await prisma.manualLead.findMany()

    return res.status(200).json({
      data: manualLeads,
    })
  } catch {
    return res.status(500).json({
      message: 'Failed to load manual leads'
    })
  }
})

app.post('/api/manual-leads', async (req, res) => {
  const {
    leadDate,
    campaignName,
    appealType,
    keywordText,
    metrikaUrl,
    amoDealUrl,
    comment,
  } = req.body

  if (!leadDate || !campaignName || !appealType || !amoDealUrl) {
    return res.status(400).json({
      message: 'Нет обязательного поля'
    })
  }

  try {
    const createLead = await prisma.manualLead.create({
      data: {
        leadDate: new Date(leadDate),
        campaignName,
        appealType,
        keywordText,
        metrikaUrl,
        amoDealUrl,
        comment,
      }
    })

    return res.status(201).json({
      message: 'Запись создана',
      lead: createLead,
    })
  } catch (error) {
      if (error.code === 'P2002') {
        return res.status(409).json({
          message: 'Manual lead with this amoDealUrl already exists'
      })
    }
    return res.status(500).json({
      message: 'Failed to create manual lead'
    })
  }
})

app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`)
})