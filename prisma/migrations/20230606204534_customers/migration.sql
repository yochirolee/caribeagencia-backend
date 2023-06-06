/*
  Warnings:

  - A unique constraint covering the columns `[license]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customers" ALTER COLUMN "license" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customers_license_key" ON "Customers"("license");
