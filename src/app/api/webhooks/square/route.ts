import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/db/client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Verify Square webhook signature
    // ... verification code ...

    // Handle payment status update
    if (body.type === 'payment.updated') {
      const orderId = body.data.object.payment.orderId;
      
      // Update booking status
      await prisma.booking.update({
        where: { squareOrderId: orderId },
        data: {
          paymentStatus: body.data.object.payment.status,
          status: body.data.object.payment.status === 'COMPLETED' 
            ? 'CONFIRMED' 
            : 'PAYMENT_FAILED'
        }
      });

      // Send confirmation email
      // ... email sending code ...
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}