/*
  Warnings:

  - You are about to drop the column `isPricePerPound` on the `ServicesPrices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ServicesPrices" DROP COLUMN "isPricePerPound",
ADD COLUMN     "isSellByPounds" BOOLEAN NOT NULL DEFAULT true;
