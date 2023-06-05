/*
  Warnings:

  - A unique constraint covering the columns `[passport]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Customers_passport_key" ON "Customers"("passport");

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
