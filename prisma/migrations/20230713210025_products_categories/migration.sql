/*
  Warnings:

  - You are about to drop the column `categories` on the `Services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Services" DROP COLUMN "categories";

-- CreateTable
CREATE TABLE "_ProductsCategoriesToServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductsCategoriesToServices_AB_unique" ON "_ProductsCategoriesToServices"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductsCategoriesToServices_B_index" ON "_ProductsCategoriesToServices"("B");

-- AddForeignKey
ALTER TABLE "_ProductsCategoriesToServices" ADD CONSTRAINT "_ProductsCategoriesToServices_A_fkey" FOREIGN KEY ("A") REFERENCES "ProductsCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductsCategoriesToServices" ADD CONSTRAINT "_ProductsCategoriesToServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
