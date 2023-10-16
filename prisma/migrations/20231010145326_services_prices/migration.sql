/*
  Warnings:

  - You are about to drop the column `price` on the `Packages` table. All the data in the column will be lost.
  - Added the required column `publicPrice` to the `Packages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicePriceId` to the `Packages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Packages" DROP COLUMN "price",
ADD COLUMN     "publicPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "servicePriceId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_servicePriceId_fkey" FOREIGN KEY ("servicePriceId") REFERENCES "ServicesPrices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
