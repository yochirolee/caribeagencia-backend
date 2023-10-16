/*
  Warnings:

  - You are about to drop the column `paymentsMethodsId` on the `Payments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_paymentsMethodsId_fkey";

-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "paymentsMethodsId",
ADD COLUMN     "paymentMethodId" INTEGER;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentsMethods"("id") ON DELETE SET NULL ON UPDATE CASCADE;
