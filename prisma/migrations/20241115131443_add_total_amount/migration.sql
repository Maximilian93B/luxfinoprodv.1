/*
  Warnings:

  - Added the required column `totalAmount` to the `BaseBooking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BaseBooking" ADD COLUMN     "totalAmount" INTEGER NOT NULL;
