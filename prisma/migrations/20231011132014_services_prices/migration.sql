/*
  Warnings:

  - You are about to drop the column `servicePriceId` on the `Packages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_servicePriceId_fkey";

-- AlterTable
ALTER TABLE "Packages" DROP COLUMN "servicePriceId",
ADD COLUMN     "isSellByPounds" BOOLEAN NOT NULL DEFAULT true;
