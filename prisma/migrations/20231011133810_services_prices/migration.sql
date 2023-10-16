-- DropIndex
DROP INDEX "Packages_hbl_idx";

-- CreateIndex
CREATE INDEX "Packages_hbl_invoiceId_id_idx" ON "Packages"("hbl", "invoiceId", "id");
