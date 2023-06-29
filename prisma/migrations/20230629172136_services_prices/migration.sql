/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the `ProductsCategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsCategories" DROP CONSTRAINT "ProductsCategories_serviceId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "type",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "serviceType" "ServiceType" NOT NULL DEFAULT 'Maritimo';

-- DropTable
DROP TABLE "ProductsCategories";

-- CreateTable
CREATE TABLE "ServicesPrices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "buyPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sellPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "ServicesPrices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Products_hbl_idx" ON "Products"("hbl");

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
