/*
  Warnings:

  - You are about to drop the column `totalAmount` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the column `totalWeight` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the `Package` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amountToPay` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PackageHistory" DROP CONSTRAINT "PackageHistory_packageId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "totalAmount",
DROP COLUMN "totalWeight",
ADD COLUMN     "amountToPay" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Package";

-- CreateTable
CREATE TABLE "Packages" (
    "id" SERIAL NOT NULL,
    "hbl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Facturado',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invoicesId" INTEGER,

    CONSTRAINT "Packages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Packages_hbl_key" ON "Packages"("hbl");

-- CreateIndex
CREATE INDEX "Packages_hbl_idx" ON "Packages"("hbl");

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_invoicesId_fkey" FOREIGN KEY ("invoicesId") REFERENCES "Invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageHistory" ADD CONSTRAINT "PackageHistory_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
