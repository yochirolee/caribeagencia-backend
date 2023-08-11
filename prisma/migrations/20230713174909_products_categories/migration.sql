/*
  Warnings:

  - You are about to drop the column `categoryId` on the `ServicesPrices` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ServicesPrices" DROP CONSTRAINT "ServicesPrices_categoryId_fkey";

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ServicesPrices" DROP COLUMN "categoryId";

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
