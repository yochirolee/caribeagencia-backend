-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "trackingNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageHistory" (
    "id" SERIAL NOT NULL,
    "packageId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PackageHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Package_trackingNumber_key" ON "Package"("trackingNumber");

-- AddForeignKey
ALTER TABLE "PackageHistory" ADD CONSTRAINT "PackageHistory_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
