-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('LUXPICNIC', 'LUXREMOTE', 'LUXCATERING');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED');

-- CreateTable
CREATE TABLE "BaseBooking" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "guests" INTEGER NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT,

    CONSTRAINT "BaseBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PicnicBooking" (
    "id" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "packageType" TEXT NOT NULL,
    "packageTitle" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "baseBookingId" TEXT NOT NULL,

    CONSTRAINT "PicnicBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RemoteBooking" (
    "id" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "packageType" TEXT NOT NULL,
    "packageTitle" TEXT NOT NULL,
    "additionalNotes" TEXT,
    "baseBookingId" TEXT NOT NULL,

    CONSTRAINT "RemoteBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CateringBooking" (
    "id" TEXT NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "eventType" TEXT NOT NULL,
    "eventTitle" TEXT NOT NULL,
    "dietaryRequirements" TEXT,
    "baseBookingId" TEXT NOT NULL,

    CONSTRAINT "CateringBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SquarePayment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderId" TEXT NOT NULL,
    "checkoutId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'AUD',
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "picnicBookingId" TEXT NOT NULL,

    CONSTRAINT "SquarePayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SquareWebhook" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "processedAt" TIMESTAMP(3),
    "status" TEXT NOT NULL,

    CONSTRAINT "SquareWebhook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PicnicBooking_baseBookingId_key" ON "PicnicBooking"("baseBookingId");

-- CreateIndex
CREATE UNIQUE INDEX "RemoteBooking_baseBookingId_key" ON "RemoteBooking"("baseBookingId");

-- CreateIndex
CREATE UNIQUE INDEX "CateringBooking_baseBookingId_key" ON "CateringBooking"("baseBookingId");

-- CreateIndex
CREATE UNIQUE INDEX "SquarePayment_orderId_key" ON "SquarePayment"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "SquarePayment_checkoutId_key" ON "SquarePayment"("checkoutId");

-- CreateIndex
CREATE UNIQUE INDEX "SquarePayment_picnicBookingId_key" ON "SquarePayment"("picnicBookingId");

-- AddForeignKey
ALTER TABLE "PicnicBooking" ADD CONSTRAINT "PicnicBooking_baseBookingId_fkey" FOREIGN KEY ("baseBookingId") REFERENCES "BaseBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RemoteBooking" ADD CONSTRAINT "RemoteBooking_baseBookingId_fkey" FOREIGN KEY ("baseBookingId") REFERENCES "BaseBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CateringBooking" ADD CONSTRAINT "CateringBooking_baseBookingId_fkey" FOREIGN KEY ("baseBookingId") REFERENCES "BaseBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SquarePayment" ADD CONSTRAINT "SquarePayment_picnicBookingId_fkey" FOREIGN KEY ("picnicBookingId") REFERENCES "PicnicBooking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
