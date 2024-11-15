import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from the bookings API!' });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ message: 'Booking created', data: body });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 400 }
    );
  }
}
