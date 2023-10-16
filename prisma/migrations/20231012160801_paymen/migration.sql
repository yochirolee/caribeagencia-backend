-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
