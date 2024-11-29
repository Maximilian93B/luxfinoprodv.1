/*
  Warnings:

  - The values [LUXPICNIC,LUXREMOTE,LUXCATERING] on the enum `ServiceType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "BookingStatus" ADD VALUE 'COMPLETED';

-- AlterEnum
BEGIN;
CREATE TYPE "ServiceType_new" AS ENUM ('LUX_PICNICS', 'LUX_REMOTE', 'LUX_CATERING');
ALTER TABLE "BaseBooking" ALTER COLUMN "serviceType" TYPE "ServiceType_new" USING ("serviceType"::text::"ServiceType_new");
ALTER TYPE "ServiceType" RENAME TO "ServiceType_old";
ALTER TYPE "ServiceType_new" RENAME TO "ServiceType";
DROP TYPE "ServiceType_old";
COMMIT;
