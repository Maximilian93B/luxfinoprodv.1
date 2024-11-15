import { PrismaClient, ServiceType, BookingStatus } from '@prisma/client';

// Interface for common booking fields
interface BaseBookingInput {
  date: Date
  guests: number
  customerName: string
  customerEmail: string
  customerPhone?: string
}

// Interface for picnic specific fields
interface PicnicBookingInput extends BaseBookingInput {
  packageType: string
  packageTitle: string
  price: string
  duration: string
  location: string
}

// Interface for remote specific fields
interface RemoteBookingInput extends BaseBookingInput {
  packageType: string
  packageTitle: string
  additionalNotes?: string
}

// Interface for catering specific fields
interface CateringBookingInput extends BaseBookingInput {
  eventType: string
  eventTitle: string
  dietaryRequirements?: string
}

// Create a single instance of PrismaClient to interact with our database
const prisma = new PrismaClient()

// BookingService class handles all booking-related database operations
export class BookingService {
  
  // Method to create a LuxPicnic booking
  async createPicnicBooking(data: PicnicBookingInput) {
    // Use transaction to ensure both operations succeed or both fail
    return await prisma.$transaction(async (tx) => {
      // Step 1: Create the base booking record with common fields
      const baseBooking = await tx.baseBooking.create({
        data: {
          serviceType: ServiceType.LUXPICNIC,
          date: data.date,
          guests: data.guests,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          customerPhone: data.customerPhone,
        },
      })

      // Step 2: Create the picnic-specific booking details
      const picnicBooking = await tx.picnicBooking.create({
        data: {
          baseBookingId: baseBooking.id,
          packageType: data.packageType,
          packageTitle: data.packageTitle,
          price: data.price,
          duration: data.duration,
          location: data.location,
          status: BookingStatus.PENDING,
        },
      })

      // Return both booking records
      return { baseBooking, picnicBooking }
    })
  }

  // Method to create a LuxRemote booking
  async createRemoteBooking(data: RemoteBookingInput) {
    // Same transaction pattern as picnic booking
    return await prisma.$transaction(async (tx) => {
      // Step 1: Create base booking
      const baseBooking = await tx.baseBooking.create({
        data: { 
          serviceType: 'LUXREMOTE',
          date: data.date,
          guests: data.guests,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          customerPhone: data.customerPhone,
        },
      })

      // Step 2: Create remote-specific details
      const remoteBooking = await tx.remoteBooking.create({
        data: {
          baseBookingId: baseBooking.id,
          packageType: data.packageType,
          packageTitle: data.packageTitle,
          additionalNotes: data.additionalNotes,
          status: BookingStatus.PENDING,
        },
      })

      return { baseBooking, remoteBooking }
    })
  }

  // Method to create a LuxCatering booking
  async createCateringBooking(data: CateringBookingInput) {
    // Same transaction pattern
    return await prisma.$transaction(async (tx) => {
      // Step 1: Create base booking
      const baseBooking = await tx.baseBooking.create({
        data: {
          serviceType: 'LUXCATERING',
          date: data.date,
          guests: data.guests,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          customerPhone: data.customerPhone,
        },
      })

      // Step 2: Create catering-specific details
      const cateringBooking = await tx.cateringBooking.create({
        data: {
          baseBookingId: baseBooking.id,
          eventType: data.eventType,
          eventTitle: data.eventTitle,
          dietaryRequirements: data.dietaryRequirements,
          status: BookingStatus.PENDING,
        },
      })

      return { baseBooking, cateringBooking }
    })
  }
}