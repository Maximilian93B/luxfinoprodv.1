-- AlterTable
ALTER TABLE "BaseBooking" ALTER COLUMN "totalAmount" DROP NOT NULL,
ALTER COLUMN "totalAmount" SET DATA TYPE DECIMAL(65,30);
