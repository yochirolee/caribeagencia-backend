/*
  Warnings:

  - Made the column `employeeId` on table `Invoices` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_employeeId_fkey";

-- AlterTable
ALTER TABLE "Invoices" ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "employeeId" SET NOT NULL,
ALTER COLUMN "discount" DROP NOT NULL,
ALTER COLUMN "discount" SET DEFAULT 0,
ALTER COLUMN "deliveryAmount" DROP NOT NULL,
ALTER COLUMN "deliveryAmount" SET DEFAULT 0,
ALTER COLUMN "amountToPay" DROP NOT NULL,
ALTER COLUMN "amountToPay" SET DEFAULT 0,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Facturado';

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
