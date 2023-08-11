/*
  Warnings:

  - You are about to drop the `_ProductsCategoriesToServices` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categories` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductsCategoriesToServices" DROP CONSTRAINT "_ProductsCategoriesToServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductsCategoriesToServices" DROP CONSTRAINT "_ProductsCategoriesToServices_B_fkey";

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "categories" JSONB NOT NULL;

-- DropTable
DROP TABLE "_ProductsCategoriesToServices";
