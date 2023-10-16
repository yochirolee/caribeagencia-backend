/*
  Warnings:

  - You are about to drop the column `agencyId` on the `ServicesPrices` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServicesPrices" DROP CONSTRAINT "ServicesPrices_agencyId_fkey";

-- AlterTable
ALTER TABLE "ServicesPrices" DROP COLUMN "agencyId",
ADD COLUMN     "agenciesId" INTEGER;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_agenciesId_fkey" FOREIGN KEY ("agenciesId") REFERENCES "Agencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
