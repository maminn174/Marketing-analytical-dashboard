-- CreateEnum
CREATE TYPE "AppealType" AS ENUM ('CALL', 'PHONE_CLICK', 'FORM', 'QUIZ', 'MESSENGER', 'OTHER');

-- CreateTable
CREATE TABLE "manual_leads" (
    "id" TEXT NOT NULL,
    "leadDate" TIMESTAMP(3) NOT NULL,
    "campaignName" TEXT NOT NULL,
    "appealType" "AppealType" NOT NULL,
    "keywordText" TEXT,
    "metrikaUrl" TEXT,
    "amoDealUrl" TEXT NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "manual_leads_pkey" PRIMARY KEY ("id")
);
