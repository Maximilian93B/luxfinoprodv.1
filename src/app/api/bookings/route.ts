import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getBookingById, getBookingsByDateRange } from '@/app/lib/db/repositories/bookings';

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (id) {
      const booking = await getBookingById(id);
      if (!booking) {
        return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
      }
      return NextResponse.json(booking);
    }

    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    
    if (startDate && endDate) {
      const bookings = await getBookingsByDateRange(new Date(startDate), new Date(endDate));
      return NextResponse.json(bookings);
    }

    return NextResponse.json({ error: 'Invalid request parameters' }, { status: 400 });
  } catch (error) {
    console.error('GET Booking Error:', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
