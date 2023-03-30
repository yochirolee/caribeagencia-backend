/*
  Warnings:

  - You are about to drop the column `first_name` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the `Receivers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InvoicesToProducts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Employees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryAmount` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recieverId` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalWeight` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `palletId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "_InvoicesToProducts" DROP CONSTRAINT "_InvoicesToProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_InvoicesToProducts" DROP CONSTRAINT "_InvoicesToProducts_B_fkey";

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "receiverId",
ADD COLUMN     "deliveryAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "discount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "recieverId" INTEGER NOT NULL,
ADD COLUMN     "totalWeight" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "invoiceId" INTEGER NOT NULL,
ADD COLUMN     "palletId" INTEGER NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Receivers";

-- DropTable
DROP TABLE "_InvoicesToProducts";

-- CreateTable
CREATE TABLE "Recievers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "Recievers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pallets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Pallets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recievers_ci_key" ON "Recievers"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "Recievers_email_key" ON "Recievers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_palletId_fkey" FOREIGN KEY ("palletId") REFERENCES "Pallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "Recievers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
