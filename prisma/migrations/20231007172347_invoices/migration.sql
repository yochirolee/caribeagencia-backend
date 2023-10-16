-- AlterTable
ALTER TABLE "Invoices" ALTER COLUMN "invoiceNumber" DROP DEFAULT,
ALTER COLUMN "invoiceNumber" SET DATA TYPE TEXT;
DROP SEQUENCE "Invoices_invoiceNumber_seq";
