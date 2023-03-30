/*
  Warnings:

  - You are about to drop the column `date` on the `Invoices` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);
