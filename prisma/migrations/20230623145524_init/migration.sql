-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "base";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "storage";

-- CreateTable
CREATE TABLE "base"."Products" (
    "id" SERIAL NOT NULL,
    "hbl" TEXT NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    "palletId" INTEGER,
    "dispatchId" INTEGER,
    "categoryId" INTEGER,
    "containerId" INTEGER,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "inventory" INTEGER NOT NULL DEFAULT 0,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "type" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Invoices" (
    "id" SERIAL NOT NULL,
    "invoiceNumber" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "customerId" INTEGER NOT NULL,
    "recieverId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "totalWeight" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "deliveryAmount" DOUBLE PRECISION NOT NULL,
    "agencyId" INTEGER NOT NULL,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."ProductsCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProductsCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."ProductsLocationHistory" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductsLocationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."Employees" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "mobile" TEXT NOT NULL,
    "agencyId" INTEGER NOT NULL,

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Customers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "license" TEXT,
    "passport" TEXT,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "phone" TEXT,
    "mobile" TEXT NOT NULL,
    "agencyId" INTEGER NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Recievers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "passport" TEXT,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "mobile" TEXT NOT NULL,
    "agencyId" INTEGER NOT NULL,
    "countryId" INTEGER,
    "stateId" INTEGER,
    "cityId" INTEGER,

    CONSTRAINT "Recievers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."States" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Cities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    "postalCode" INTEGER NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Pallets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Pallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Agencies" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "owner" TEXT,
    "description" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "phone" TEXT,

    CONSTRAINT "Agencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Dispatches" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Dispatches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."Containers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Containers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base"."_CustomersToRecievers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_hbl_key" ON "base"."Products"("hbl");

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_invoiceNumber_key" ON "base"."Invoices"("invoiceNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "auth"."Employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_license_key" ON "base"."Customers"("license");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_passport_key" ON "base"."Customers"("passport");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "base"."Customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_mobile_key" ON "base"."Customers"("mobile");

-- CreateIndex
CREATE INDEX "Customers_firstName_lastName_email_mobile_idx" ON "base"."Customers"("firstName", "lastName", "email", "mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Recievers_ci_key" ON "base"."Recievers"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "Recievers_email_key" ON "base"."Recievers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recievers_mobile_key" ON "base"."Recievers"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomersToRecievers_AB_unique" ON "base"."_CustomersToRecievers"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomersToRecievers_B_index" ON "base"."_CustomersToRecievers"("B");

-- AddForeignKey
ALTER TABLE "base"."Products" ADD CONSTRAINT "Products_palletId_fkey" FOREIGN KEY ("palletId") REFERENCES "base"."Pallets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Products" ADD CONSTRAINT "Products_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "base"."Invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "base"."ProductsCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Products" ADD CONSTRAINT "Products_dispatchId_fkey" FOREIGN KEY ("dispatchId") REFERENCES "base"."Dispatches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Products" ADD CONSTRAINT "Products_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "base"."Containers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Invoices" ADD CONSTRAINT "Invoices_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "base"."Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Invoices" ADD CONSTRAINT "Invoices_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "auth"."Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Invoices" ADD CONSTRAINT "Invoices_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "base"."Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Invoices" ADD CONSTRAINT "Invoices_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "base"."Recievers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."ProductsLocationHistory" ADD CONSTRAINT "ProductsLocationHistory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "base"."Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth"."Employees" ADD CONSTRAINT "Employees_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "base"."Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Customers" ADD CONSTRAINT "Customers_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "base"."Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Customers" ADD CONSTRAINT "Customers_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "base"."States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Customers" ADD CONSTRAINT "Customers_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "base"."Cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Recievers" ADD CONSTRAINT "Recievers_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "base"."Agencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Recievers" ADD CONSTRAINT "Recievers_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "base"."Countries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Recievers" ADD CONSTRAINT "Recievers_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "base"."States"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Recievers" ADD CONSTRAINT "Recievers_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "base"."Cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."States" ADD CONSTRAINT "States_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "base"."Countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."Cities" ADD CONSTRAINT "Cities_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "base"."States"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."_CustomersToRecievers" ADD CONSTRAINT "_CustomersToRecievers_A_fkey" FOREIGN KEY ("A") REFERENCES "base"."Customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base"."_CustomersToRecievers" ADD CONSTRAINT "_CustomersToRecievers_B_fkey" FOREIGN KEY ("B") REFERENCES "base"."Recievers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
