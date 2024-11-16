import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { BookingService } from '@/app/lib/db/repositories/service';

const bookingService = new BookingService();

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    
    // Transform and validate the data
    const cateringBookingData = {
      date: new Date(bookingData.date),
      guests: parseInt(bookingData.guests),
      customerFirstName: bookingData.customerFirstName,
      customerLastName: bookingData.customerLastName,
      customerEmail: bookingData.customerEmail,
      customerPhone: bookingData.customerPhone,
      eventType: bookingData.eventType,         // Make sure this is passed
      eventTitle: bookingData.eventTitle || bookingData.selectedOption, // Fallback to selectedOption if eventTitle not provided
      dietaryRequirements: bookingData.dietaryRequirements || bookingData.additionalNotes // Support both field names
    };

    // Log the transformed data for debugging
    console.log('Transformed booking data:', cateringBookingData);

    const booking = await bookingService.createCateringBooking(cateringBookingData);

    return NextResponse.json({ booking });
  } catch (error) {
    console.error('Create Catering Booking Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create catering booking' },
      { status: 500 }
    );
  }
}