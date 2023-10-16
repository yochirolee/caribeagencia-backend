/*
  Warnings:

  - You are about to drop the column `invoicesId` on the `Packages` table. All the data in the column will be lost.
  - Added the required column `invoiceId` to the `Packages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Packages" DROP CONSTRAINT "Packages_invoicesId_fkey";

-- AlterTable
ALTER TABLE "Packages" DROP COLUMN "invoicesId",
ADD COLUMN     "invoiceId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
