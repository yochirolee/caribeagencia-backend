/*
  Warnings:

  - Made the column `invoicesId` on table `Packages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Packages" ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "invoicesId" SET NOT NULL;
