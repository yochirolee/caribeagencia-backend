-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "agenciesId" INTEGER;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_agenciesId_fkey" FOREIGN KEY ("agenciesId") REFERENCES "Agencies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
