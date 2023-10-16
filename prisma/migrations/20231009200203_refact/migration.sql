/*
  Warnings:

  - You are about to drop the column `agenciesId` on the `Services` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_agenciesId_fkey";

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "agenciesId",
ADD COLUMN     "agencyId" INTEGER;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
