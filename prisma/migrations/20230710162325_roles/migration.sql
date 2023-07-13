/*
  Warnings:

  - The primary key for the `Employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Employees` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_employeeId_fkey";

-- AlterTable
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Employees_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Employees_id_seq";

-- AlterTable
ALTER TABLE "Invoices" ALTER COLUMN "employeeId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Employees_id_key" ON "Employees"("id");

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
