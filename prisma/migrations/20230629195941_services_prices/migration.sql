/*
  Warnings:

  - You are about to drop the column `agencyId` on the `Services` table. All the data in the column will be lost.
  - Added the required column `invoiceCode` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `agencyId` to the `ServicesPrices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_agencyId_fkey";

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "agencyId",
ADD COLUMN     "invoiceCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ServicesPrices" ADD COLUMN     "agencyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ServicesProviders" ADD COLUMN     "logoUrl" TEXT;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
