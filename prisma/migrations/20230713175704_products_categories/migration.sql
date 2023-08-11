/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Services` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_categoryId_fkey";

-- AlterTable
ALTER TABLE "ProductsCategories" ADD COLUMN     "servicesId" INTEGER;

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "categoryId";

-- AddForeignKey
ALTER TABLE "ProductsCategories" ADD CONSTRAINT "ProductsCategories_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "Services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
