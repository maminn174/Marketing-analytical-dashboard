-- CreateTable
CREATE TABLE "DirectDailyPhraseStat" (
    "id" TEXT NOT NULL,
    "importBatchId" TEXT NOT NULL,
    "statDate" TIMESTAMP(3) NOT NULL,
    "campaignId" TEXT NOT NULL,
    "campaignName" TEXT NOT NULL,
    "adGroupId" TEXT NOT NULL,
    "adGroupName" TEXT NOT NULL,
    "criteriaType" TEXT NOT NULL,
    "keywordText" TEXT NOT NULL,
    "targetRegionName" TEXT NOT NULL,
    "targetRegionId" TEXT NOT NULL,
    "deviceType" TEXT NOT NULL,
    "spend" DECIMAL(65,30) NOT NULL,
    "clicks" INTEGER NOT NULL,
    "directConversions" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "avgBidPerClick" DECIMAL(65,30) NOT NULL,
    "avgImpressionPosition" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirectDailyPhraseStat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DirectDailyPhraseStat_statDate_campaignId_adGroupId_criteri_key" ON "DirectDailyPhraseStat"("statDate", "campaignId", "adGroupId", "criteriaType", "keywordText", "targetRegionId", "deviceType");

-- AddForeignKey
ALTER TABLE "DirectDailyPhraseStat" ADD CONSTRAINT "DirectDailyPhraseStat_importBatchId_fkey" FOREIGN KEY ("importBatchId") REFERENCES "DirectImportBatch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
