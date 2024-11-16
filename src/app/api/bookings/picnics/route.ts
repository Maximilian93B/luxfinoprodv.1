import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { BookingService } from '@/app/lib/db/repositories/service';
import { SquarePaymentService } from '@/app/lib/db/repositories/square-payment-service';

const bookingService = new BookingService();
const paymentService = new SquarePaymentService();

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    const formattedPhone = bookingData.customerPhone.replace(/\D/g, '');
    const e164Phone = formattedPhone.startsWith('1') ? `+${formattedPhone}` : `+1${formattedPhone}`;

    const { baseBooking } = await bookingService.createPicnicBooking({
      date: new Date(bookingData.date),
      guests: parseInt(bookingData.guests),
      customerFirstName: bookingData.customerFirstName,
      customerLastName: bookingData.customerLastName,
      customerEmail: bookingData.customerEmail,
      customerPhone: e164Phone,
      packageType: bookingData.packageType,
      packageTitle: bookingData.packageTitle,
      price: bookingData.totalAmount,
      duration: bookingData.duration,
      location: bookingData.location
    });

    const checkoutUrl = await paymentService.createPayment(baseBooking);
    return NextResponse.json({ booking: baseBooking, checkoutUrl });
  } catch (error) {
    console.error('Create Picnic Booking Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create picnic booking' },
      { status: 500 }
    );
  }
}