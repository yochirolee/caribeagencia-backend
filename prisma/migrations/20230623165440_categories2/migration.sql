/*
  Warnings:

  - Added the required column `agencyId` to the `ProductsCategories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductsCategories" ADD COLUMN     "agencyId" INTEGER NOT NULL,
ADD COLUMN     "pricePeerPoundForSale" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "ProductsCategories" ADD CONSTRAINT "ProductsCategories_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
