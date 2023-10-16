/*
  Warnings:

  - You are about to drop the column `weight` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the column `agencyId` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `recieverId` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Packages` table. All the data in the column will be lost.
  - You are about to drop the column `productCategoryId` on the `ServicesPrices` table. All the data in the column will be lost.
  - You are about to drop the `Containers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dispatches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pallets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductsCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductsLocationHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductsCategoriesToServices` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `ServicesPrices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_agencyId_fkey";

-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_recieverId_fkey";

-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_containerId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_dispatchId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_palletId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsLocationHistory" DROP CONSTRAINT "ProductsLocationHistory_productId_fkey";

-- DropForeignKey
ALTER TABLE "ServicesPrices" DROP CONSTRAINT "ServicesPrices_productCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsCategoriesToServices" DROP CONSTRAINT "_ProductsCategoriesToServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsCategoriesToServices" DROP CONSTRAINT "_ProductsCategoriesToServices_B_fkey";

-- DropIndex
DROP INDEX "Customers_email_key";

-- DropIndex
DROP INDEX "Customers_license_key";

-- DropIndex
DROP INDEX "Customers_passport_key";

-- AlterTable
ALTER TABLE "Customers" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "weight",
ALTER COLUMN "employeeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Packages" DROP COLUMN "agencyId",
DROP COLUMN "customerId",
DROP COLUMN "employeeId",
DROP COLUMN "recieverId",
DROP COLUMN "serviceId";

-- AlterTable
ALTER TABLE "Roles" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ServicesPrices" DROP COLUMN "productCategoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Containers";

-- DropTable
DROP TABLE "Dispatches";

-- DropTable
DROP TABLE "Pallets";

-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "ProductsCategories";

-- DropTable
DROP TABLE "ProductsLocationHistory";

-- DropTable
DROP TABLE "_ProductsCategoriesToServices";

-- CreateTable
CREATE TABLE "PackagesCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PackagesCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PackagesCategoriesToServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PackagesCategoriesToServices_AB_unique" ON "_PackagesCategoriesToServices"("A", "B");

-- CreateIndex
CREATE INDEX "_PackagesCategoriesToServices_B_index" ON "_PackagesCategoriesToServices"("B");

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "PackagesCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackagesCategoriesToServices" ADD CONSTRAINT "_PackagesCategoriesToServices_A_fkey" FOREIGN KEY ("A") REFERENCES "PackagesCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackagesCategoriesToServices" ADD CONSTRAINT "_PackagesCategoriesToServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
