/*
  Warnings:

  - You are about to drop the column `name` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `EmployeeId` on the `Invoices` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Receivers` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Receivers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Receivers` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `Receivers` table. All the data in the column will be lost.
  - Added the required column `address` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityId` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `license` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passport` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postal_code` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ci` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityId` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passport` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postal_code` to the `Receivers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Receivers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoices" DROP CONSTRAINT "Invoices_EmployeeId_fkey";

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "name",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD COLUMN     "countryId" INTEGER NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "license" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "passport" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "postal_code" TEXT NOT NULL,
ADD COLUMN     "stateId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Employees" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Invoices" DROP COLUMN "EmployeeId",
ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Receivers" DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "name",
DROP COLUMN "province",
ADD COLUMN     "ci" TEXT NOT NULL,
ADD COLUMN     "cityId" INTEGER NOT NULL,
ADD COLUMN     "countryId" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "passport" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "postal_code" TEXT NOT NULL,
ADD COLUMN     "stateId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "States" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoices" ADD CONSTRAINT "Invoices_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "States" ADD CONSTRAINT "States_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "Cities_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
