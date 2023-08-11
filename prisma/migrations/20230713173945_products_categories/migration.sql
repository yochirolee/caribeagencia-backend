/*
  Warnings:

  - Added the required column `categoryId` to the `ServicesPrices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServicesPrices" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
