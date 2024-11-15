import { PrismaClient } from '@prisma/client'
import { ServiceType, BookingStatus } from '@prisma/client'

// Initialize database connection
const prisma = new PrismaClient()

// Define the common fields that all booking types share
interface BaseBookingInput {
  serviceType: ServiceType
  date: Date
  guests: number
  customerName: string
  customerEmail: string
  customerPhone?: string  // Optional field
}

// Specific fields for picnic bookings
interface PicnicBookingInput extends BaseBookingInput {
  packageType: string
  packageTitle: string
  price: string
  duration: string
  location: string
}

// Specific fields for remote bookings
interface RemoteBookingInput extends BaseBookingInput {
  packageType: string
  packageTitle: string
  additionalNotes?: string  // Optional field
}

// Specific fields for catering bookings
interface CateringBookingInput extends BaseBookingInput {
  eventType: string
  eventTitle: string
  dietaryRequirements?: string  // Optional field
}

// Function to create a new booking of any type
export async function createBooking(data: PicnicBookingInput | RemoteBookingInput | CateringBookingInput) {
  // First, create the base booking with common fields
  const baseBooking = await prisma.baseBooking.create({
    data: {
      serviceType: data.serviceType,
      date: data.date,
      guests: data.guests,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
    },
  })

  // Based on the service type, create the specific booking details
  switch (data.serviceType) {
    case 'LUXPICNIC':
      if ('price' in data) {  // Check if it's a picnic booking
        await prisma.picnicBooking.create({
          data: {
            packageType: data.packageType,
            packageTitle: data.packageTitle,
            price: data.price,
            duration: data.duration,
            location: data.location,
            baseBookingId: baseBooking.id,  // Link to the base booking
          },
        })
      }
      break

    case 'LUXREMOTE':
      if ('additionalNotes' in data) {  // Check if it's a remote booking
        await prisma.remoteBooking.create({
          data: {
            packageType: data.packageType,
            packageTitle: data.packageTitle,
            additionalNotes: data.additionalNotes,
            baseBookingId: baseBooking.id,  // Link to the base booking
          },
        })
      }
      break

    case 'LUXCATERING':
      if ('eventType' in data) {  // Check if it's a catering booking
        await prisma.cateringBooking.create({
          data: {
            eventType: data.eventType,
            eventTitle: data.eventTitle,
            dietaryRequirements: data.dietaryRequirements,
            baseBookingId: baseBooking.id,  // Link to the base booking
          },
        })
      }
      break
  }

  // Return the complete booking with all details
  return getBookingById(baseBooking.id)
}

// Fetch a single booking by its ID, including all specific booking details
export async function getBookingById(id: string) {
  return prisma.baseBooking.findUnique({
    where: { id },
    include: {
      picnicBooking: true,
      remoteBooking: true,
      cateringBooking: true,
    },
  })
}

// Get all bookings within a date range, ordered by date
export async function getBookingsByDateRange(start: Date, end: Date) {
  return prisma.baseBooking.findMany({
    where: {
      date: {
        gte: start,  // Greater than or equal to start date
        lte: end,    // Less than or equal to end date
      }
    },
    include: {
      picnicBooking: true,
      remoteBooking: true,
      cateringBooking: true,
    },
    orderBy: {
      date: 'asc',  // Sort by date ascending
    }
  })
}

// Update the status of any booking type
export async function updateBookingStatus(id: string, status: BookingStatus) {
  // First find the booking to determine its type
  const booking = await prisma.baseBooking.findUnique({
    where: { id },
    include: {
      picnicBooking: true,
      remoteBooking: true,
      cateringBooking: true,
    },
  })

  if (!booking) throw new Error('Booking not found')

  // Update the status based on which type of booking it is
  if (booking.picnicBooking) {
    await prisma.picnicBooking.update({
      where: { id: booking.picnicBooking.id },
      data: { status },
    })
  } else if (booking.remoteBooking) {
    await prisma.remoteBooking.update({
      where: { id: booking.remoteBooking.id },
      data: { status },
    })
  } else if (booking.cateringBooking) {
    await prisma.cateringBooking.update({
      where: { id: booking.cateringBooking.id },
      data: { status },
    })
  }

  // Return the updated booking
  return getBookingById(id)
}