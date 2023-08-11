/*
  Warnings:

  - Added the required column `productCategoryId` to the `ServicesPrices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServicesPrices" ADD COLUMN     "productCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "ProductsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
