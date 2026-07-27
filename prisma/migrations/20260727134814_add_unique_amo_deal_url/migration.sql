/*
  Warnings:

  - A unique constraint covering the columns `[amoDealUrl]` on the table `manual_leads` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "manual_leads_amoDealUrl_key" ON "manual_leads"("amoDealUrl");
