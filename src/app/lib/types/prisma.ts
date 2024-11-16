import { Prisma } from '@prisma/client'

// Define service types
export enum ServiceType {
  LUX_PICNIC = 'LUX_PICNIC',
  LUX_REMOTE = 'LUX_REMOTE',
  LUX_CATERING = 'LUX_CATERING'
}

// Define booking statuses
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED'
}

// Define types for the Prisma models
export type BaseBooking = Prisma.$BaseBookingPayload
export type PicnicBooking = Prisma.$PicnicBookingPayload
export type RemoteBooking = Prisma.$RemoteBookingPayload
export type CateringBooking = Prisma.$CateringBookingPayload