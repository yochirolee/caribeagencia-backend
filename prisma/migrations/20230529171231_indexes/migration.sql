-- CreateIndex
CREATE INDEX "Customers_firstName_lastName_email_mobile_idx" ON "Customers"("firstName", "lastName", "email", "mobile");
