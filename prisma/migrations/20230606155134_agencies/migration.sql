-- AlterTable
ALTER TABLE "Agencies" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "owner" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;