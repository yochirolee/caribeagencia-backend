/*
  Warnings:

  - You are about to drop the column `customerId` on the `Recievers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Recievers" DROP CONSTRAINT "Recievers_customerId_fkey";

-- AlterTable
ALTER TABLE "Recievers" DROP COLUMN "customerId";

-- CreateTable
CREATE TABLE "_CustomersToRecievers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CustomersToRecievers_AB_unique" ON "_CustomersToRecievers"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomersToRecievers_B_index" ON "_CustomersToRecievers"("B");

-- AddForeignKey
ALTER TABLE "_CustomersToRecievers" ADD CONSTRAINT "_CustomersToRecievers_A_fkey" FOREIGN KEY ("A") REFERENCES "Customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomersToRecievers" ADD CONSTRAINT "_CustomersToRecievers_B_fkey" FOREIGN KEY ("B") REFERENCES "Recievers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
