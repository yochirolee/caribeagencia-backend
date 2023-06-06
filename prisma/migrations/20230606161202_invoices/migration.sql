-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_containerId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_dispatchId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_palletId_fkey";

-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "palletId" DROP NOT NULL,
ALTER COLUMN "dispatchId" DROP NOT NULL,
ALTER COLUMN "categoryId" DROP NOT NULL,
ALTER COLUMN "containerId" DROP NOT NULL,
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "inventory" SET DEFAULT 0,
ALTER COLUMN "weight" SET DEFAULT 0,
ALTER COLUMN "type" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_palletId_fkey" FOREIGN KEY ("palletId") REFERENCES "Pallets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductsCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_dispatchId_fkey" FOREIGN KEY ("dispatchId") REFERENCES "Dispatches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Containers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
