import { BaseBooking as PrismaBaseBooking, PicnicBooking as PrismaPicnicBooking, RemoteBooking as PrismaRemoteBooking, CateringBooking as PrismaCateringBooking } from '@prisma/client'

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
export type BaseBooking = PrismaBaseBooking
export type PicnicBooking = PrismaPicnicBooking
export type RemoteBooking = PrismaRemoteBooking
export type CateringBooking = PrismaCateringBooking