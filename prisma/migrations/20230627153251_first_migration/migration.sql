/*
  Warnings:

  - You are about to drop the column `pricePeerContainer` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `pricePeerCubic` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `pricePeerPallet` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `pricePeerPound` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `pricePeerPoundForSale` on the `ProductsCategories` table. All the data in the column will be lost.
  - You are about to drop the column `pricePeerUnit` on the `ProductsCategories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductsCategories" DROP COLUMN "pricePeerContainer",
DROP COLUMN "pricePeerCubic",
DROP COLUMN "pricePeerPallet",
DROP COLUMN "pricePeerPound",
DROP COLUMN "pricePeerPoundForSale",
DROP COLUMN "pricePeerUnit",
ADD COLUMN     "poundBuyPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "poundSalePrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "unitBuyPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "unitSalePrice" DOUBLE PRECISION NOT NULL DEFAULT 0;
