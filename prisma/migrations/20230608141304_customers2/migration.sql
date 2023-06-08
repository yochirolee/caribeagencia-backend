/*
  Warnings:

  - You are about to drop the `_CustomersToRecievers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `Recievers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CustomersToRecievers" DROP CONSTRAINT "_CustomersToRecievers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CustomersToRecievers" DROP CONSTRAINT "_CustomersToRecievers_B_fkey";

-- AlterTable
ALTER TABLE "Recievers" ADD COLUMN     "customerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_CustomersToRecievers";

-- AddForeignKey
ALTER TABLE "Recievers" ADD CONSTRAINT "Recievers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
