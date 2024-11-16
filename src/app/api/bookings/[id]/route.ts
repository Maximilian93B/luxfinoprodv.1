import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getBookingById, updateBookingStatus } from '@/app/lib/db/repositories/bookings';
import { BookingStatus } from '@prisma/client';

/**
 * PATCH handler for updating booking status
 * Requires booking ID in URL and new status in request body
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status } = body;

    // Validate status is a valid BookingStatus enum value
    if (!Object.values(BookingStatus).includes(status)) {
      return NextResponse.json(
        { error: 'Invalid booking status' },
        { status: 400 }
      );
    }

    const updatedBooking = await updateBookingStatus(params.id, status);
    return NextResponse.json(updatedBooking);
  } catch (error) {
    console.error('Update Booking Error:', error);
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    );
  }
}

/**
 * GET handler for retrieving a single booking
 * Requires booking ID in URL
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const booking = await getBookingById(params.id);
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(booking);
  } catch (error) {
    console.error('Get Booking Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booking' },
      { status: 500 }
    );
  }
}