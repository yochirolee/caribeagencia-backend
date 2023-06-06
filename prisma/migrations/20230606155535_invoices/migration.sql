/*
  Warnings:

  - The `invoiceNumber` column on the `Invoices` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "invoiceNumber",
ADD COLUMN     "invoiceNumber" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_invoiceNumber_key" ON "Invoices"("invoiceNumber");
