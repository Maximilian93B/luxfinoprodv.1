import { Prisma } from '@prisma/client'

export enum ServiceType {
  LUX_PICNIC = 'LUX_PICNIC',
  LUX_REMOTE = 'LUX_REMOTE',
  LUX_CATERING = 'LUX_CATERING'
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED'
}

// Define types for the Prisma models
export type BaseBooking = Prisma.BaseBookingGetPayload<{}>
export type PicnicBooking = Prisma.PicnicBookingGetPayload<{}>
export type RemoteBooking = Prisma.RemoteBookingGetPayload<{}>
export type CateringBooking = Prisma.CateringBookingGetPayload<{}>