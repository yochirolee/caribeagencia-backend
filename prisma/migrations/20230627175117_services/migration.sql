/*
  Warnings:

  - You are about to drop the column `agencyId` on the `ProductsCategories` table. All the data in the column will be lost.
  - Added the required column `serviceId` to the `ProductsCategories` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('Aereo', 'Maritimo', 'Mulas');

-- DropForeignKey
ALTER TABLE "ProductsCategories" DROP CONSTRAINT "ProductsCategories_agencyId_fkey";

-- AlterTable
ALTER TABLE "ProductsCategories" DROP COLUMN "agencyId",
ADD COLUMN     "serviceId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ServicesProviders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL DEFAULT 'Maritimo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "agencyId" INTEGER NOT NULL,

    CONSTRAINT "ServicesProviders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServicesProviders" ADD CONSTRAINT "ServicesProviders_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsCategories" ADD CONSTRAINT "ProductsCategories_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "ServicesProviders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
