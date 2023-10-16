/*
  Warnings:

  - Added the required column `agencyId` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recieverId` to the `Packages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Packages" ADD COLUMN     "agencyId" INTEGER NOT NULL,
ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD COLUMN     "employeeId" TEXT NOT NULL,
ADD COLUMN     "recieverId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "Recievers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
