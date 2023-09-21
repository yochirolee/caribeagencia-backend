/*
  Warnings:

  - You are about to drop the column `cityId` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `stateId` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `trackingNumber` on the `Package` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hbl]` on the table `Package` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hbl` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Package` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customers" DROP CONSTRAINT "Customers_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Customers" DROP CONSTRAINT "Customers_stateId_fkey";

-- DropIndex
DROP INDEX "Package_trackingNumber_key";

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "cityId",
DROP COLUMN "countryId",
DROP COLUMN "stateId";

-- AlterTable
ALTER TABLE "Package" DROP COLUMN "trackingNumber",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "hbl" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Package_hbl_key" ON "Package"("hbl");
