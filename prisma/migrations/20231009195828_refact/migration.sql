/*
  Warnings:

  - You are about to drop the column `agenciesId` on the `ServicesPrices` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `ServicesPrices` table. All the data in the column will be lost.
  - Added the required column `packageCategoryId` to the `ServicesPrices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServicesPrices" DROP CONSTRAINT "ServicesPrices_agenciesId_fkey";

-- DropForeignKey
ALTER TABLE "ServicesPrices" DROP CONSTRAINT "ServicesPrices_categoryId_fkey";

-- AlterTable
ALTER TABLE "ServicesPrices" DROP COLUMN "agenciesId",
DROP COLUMN "categoryId",
ADD COLUMN     "agencyId" INTEGER,
ADD COLUMN     "packageCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_packageCategoryId_fkey" FOREIGN KEY ("packageCategoryId") REFERENCES "PackagesCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
