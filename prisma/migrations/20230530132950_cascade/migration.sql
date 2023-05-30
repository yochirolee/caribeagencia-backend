-- DropForeignKey
ALTER TABLE "Cities" DROP CONSTRAINT "Cities_stateId_fkey";

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "Cities_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "States"("id") ON DELETE CASCADE ON UPDATE CASCADE;
