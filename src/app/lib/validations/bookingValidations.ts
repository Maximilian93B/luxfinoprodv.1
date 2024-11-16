import { z } from 'zod';
import { ServiceType, BookingStatus } from '@prisma/client';

// Base booking schema with common fields
export const baseBookingSchema = z.object({
  date: z.coerce.date(),
  guests: z.number().min(1),
  customerFirstName: z.string().min(1),
  customerLastName: z.string().min(1),
  customerEmail: z.string().email(),
  customerPhone: z.string().optional(),
});

// Picnic booking specific schema
export const picnicBookingSchema = baseBookingSchema.extend({
  serviceType: z.literal(ServiceType.LUX_PICNIC),
  packageType: z.string().min(1),
  packageTitle: z.string().min(1),
  price: z.string().min(1),
  duration: z.string().min(1),
  location: z.string().min(1),
  totalAmount: z.number().min(0),
});

// Remote booking specific schema
export const remoteBookingSchema = baseBookingSchema.extend({
  serviceType: z.literal(ServiceType.LUX_REMOTE),
  packageType: z.string(),
  packageTitle: z.string(),
  additionalNotes: z.string().optional(),
});

// Catering booking specific schema
export const cateringBookingSchema = baseBookingSchema.extend({
  serviceType: z.literal(ServiceType.LUX_CATERING),
  eventType: z.string(),
  eventTitle: z.string(),
  dietaryRequirements: z.string().optional(),
});

// Status update schema
export const statusUpdateSchema = z.object({
  status: z.enum([
    BookingStatus.PENDING,
    BookingStatus.CONFIRMED,
    BookingStatus.CANCELLED,
    BookingStatus.COMPLETED,
  ]),
});