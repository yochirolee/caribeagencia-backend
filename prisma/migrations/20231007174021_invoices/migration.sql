/*
  Warnings:

  - You are about to drop the `PackageHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PackageHistory" DROP CONSTRAINT "PackageHistory_packageId_fkey";

-- DropTable
DROP TABLE "PackageHistory";

-- CreateTable
CREATE TABLE "PackagesHistory" (
    "id" SERIAL NOT NULL,
    "packageId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PackagesHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PackagesHistory" ADD CONSTRAINT "PackagesHistory_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
