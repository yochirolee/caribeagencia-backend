-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_providerId_fkey";

-- DropForeignKey
ALTER TABLE "ServicesPrices" DROP CONSTRAINT "ServicesPrices_serviceId_fkey";

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "ServicesProviders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicesPrices" ADD CONSTRAINT "ServicesPrices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
