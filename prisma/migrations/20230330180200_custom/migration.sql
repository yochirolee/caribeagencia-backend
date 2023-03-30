/*
  Warnings:

  - You are about to drop the column `postalCode` on the `Recievers` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Recievers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recievers" DROP COLUMN "postalCode",
ADD COLUMN     "customerId" INTEGER NOT NULL,
ALTER COLUMN "passport" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "countryId" DROP NOT NULL,
ALTER COLUMN "stateId" DROP NOT NULL,
ALTER COLUMN "cityId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Recievers" ADD CONSTRAINT "Recievers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recievers" ADD CONSTRAINT "Recievers_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recievers" ADD CONSTRAINT "Recievers_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "States"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recievers" ADD CONSTRAINT "Recievers_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
