import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { BookingService } from '@/app/lib/db/repositories/service';

const bookingService = new BookingService();

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    
    // Transform and validate the data
    const remoteBookingData = {
      date: new Date(bookingData.date),
      guests: parseInt(bookingData.guests),
      customerFirstName: bookingData.customerFirstName,
      customerLastName: bookingData.customerLastName,
      customerEmail: bookingData.customerEmail,
      customerPhone: bookingData.customerPhone,
      packageType: bookingData.packageType,
      packageTitle: bookingData.packageTitle,
      additionalNotes: bookingData.additionalNotes
    };

    // Log the transformed data for debugging
    console.log('Transformed booking data:', remoteBookingData);

    const booking = await bookingService.createRemoteBooking(remoteBookingData);

    return NextResponse.json({ booking });
  } catch (error) {
    console.error('Create Remote Booking Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create remote booking' },
      { status: 500 }
    );
  }
}