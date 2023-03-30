/*
  Warnings:

  - You are about to drop the column `postal_code` on the `Customers` table. All the data in the column will be lost.
  - Added the required column `postalCode` to the `Cities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `containerId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dispatchId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_id_fkey";

-- AlterTable
ALTER TABLE "Cities" ADD COLUMN     "postalCode" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "postal_code";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "containerId" INTEGER NOT NULL,
ADD COLUMN     "dispatchId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Dispatches" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Dispatches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Containers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Containers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_dispatchId_fkey" FOREIGN KEY ("dispatchId") REFERENCES "Dispatches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Containers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
