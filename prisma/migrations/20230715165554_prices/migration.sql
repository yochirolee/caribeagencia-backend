/*
  Warnings:

  - You are about to drop the column `buyPrice` on the `ServicesPrices` table. All the data in the column will be lost.
  - You are about to drop the column `sellPrice` on the `ServicesPrices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ServicesPrices" DROP COLUMN "buyPrice",
DROP COLUMN "sellPrice",
ADD COLUMN     "agencyPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "costPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "publicPrice" DOUBLE PRECISION NOT NULL DEFAULT 0;
