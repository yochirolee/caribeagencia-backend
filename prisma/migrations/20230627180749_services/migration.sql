/*
  Warnings:

  - You are about to drop the `ServicesProviders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductsCategories" DROP CONSTRAINT "ProductsCategories_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "ServicesProviders" DROP CONSTRAINT "ServicesProviders_agencyId_fkey";

-- DropTable
DROP TABLE "ServicesProviders";

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "providerName" TEXT NOT NULL,
    "providerPhone" TEXT NOT NULL,
    "providerAddress" TEXT NOT NULL,
    "providerEmail" TEXT NOT NULL,
    "type" "ServiceType" NOT NULL DEFAULT 'Maritimo',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "agencyId" INTEGER NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsCategories" ADD CONSTRAINT "ProductsCategories_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
