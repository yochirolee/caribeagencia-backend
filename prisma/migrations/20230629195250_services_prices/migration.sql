/*
  Warnings:

  - You are about to drop the column `providerAddress` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the column `providerEmail` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the column `providerName` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the column `providerPhone` on the `Services` table. All the data in the column will be lost.
  - Added the required column `providerId` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Services" DROP COLUMN "providerAddress",
DROP COLUMN "providerEmail",
DROP COLUMN "providerName",
DROP COLUMN "providerPhone",
ADD COLUMN     "providerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ServicesProviders" (
    "id" SERIAL NOT NULL,
    "providerName" TEXT NOT NULL,
    "providerPhone" TEXT NOT NULL,
    "providerAddress" TEXT NOT NULL,
    "providerEmail" TEXT NOT NULL,

    CONSTRAINT "ServicesProviders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "ServicesProviders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
