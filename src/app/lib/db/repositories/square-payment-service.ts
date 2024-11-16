import { Client, Environment, ApiError } from 'square';
import { BaseBooking } from '@/app/lib/types/prisma';

// Utility function to safely retrieve environment variables
function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}

function getBaseUrl(): string {
  // Vercel provides these environment variables automatically
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback for local development
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

export class SquarePaymentService {
  // Square API client instance
  private client: Client;
  private readonly GST_RATE = 0.05;  // 5% GST
  private readonly TRIBAL_TAX_RATE = 0.01;  // 1% Tribal Parks tax

  constructor() {
    // Initialize Square client with access token and environment settings
    this.client = new Client({
      accessToken: getEnvVar('SQUARE_ACCESS_TOKEN_SANDBOX'),
      environment: getEnvVar('SQUARE_ENVIRONMENT', 'sandbox') === 'production' 
        ? Environment.Production 
        : Environment.Sandbox
    });
  }

  async createPayment(booking: BaseBooking): Promise<{ id: string; url: string }> {
    // Validate required booking fields
    if (!booking.customerEmail || !booking.totalAmount) {
      throw new Error('Booking must include customer email and total amount');
    }

    // Calculate taxes
    const baseAmount = Number(booking.totalAmount);
    const gstAmount = Math.round(baseAmount * this.GST_RATE);
    const tribalTaxAmount = Math.round(baseAmount * this.TRIBAL_TAX_RATE);
    const totalWithTaxes = baseAmount + gstAmount + tribalTaxAmount;

    try {
      // Create Square payment link with booking details
      const response = await this.client.checkoutApi.createPaymentLink({
        idempotencyKey: booking.id,  // Ensures no duplicate payments
        quickPay: {
          name: `LuxPicnic Booking - ${booking.id}`,
          locationId: getEnvVar('SQUARE_LOCATION_ID'),
          priceMoney: {
            amount: BigInt(totalWithTaxes),
            currency: 'CAD'
          }
        },
        // Pre-fill customer information
        prePopulatedData: {
          buyerEmail: booking.customerEmail,
          buyerPhoneNumber: booking.customerPhone
        },
        // Configure post-payment redirect
        checkoutOptions: {
          redirectUrl: `${getBaseUrl()}/booking/confirmation/${booking.id}`,
          askForShippingAddress: false,
          acceptedPaymentMethods: {
            applePay: true,
            googlePay: true,
            cashAppPay: false,
            afterpayClearpay: false
          }
        },
        // Add tax details to payment description
        paymentNote: `Base Amount: $${(Number(baseAmount)/100).toFixed(2)} | GST (5%): $${(Number(gstAmount)/100).toFixed(2)} | Tribal Parks Tax (1%): $${(Number(tribalTaxAmount)/100).toFixed(2)}`
      });

      // Validate payment link response
      const paymentLink = response.result.paymentLink;
      if (!paymentLink) {
        throw new Error('Payment link was not created successfully.');
      }
 
      const { id, url } = paymentLink;
      if (!id || !url) {
        throw new Error('Payment link response is missing required properties.');
      }
 
      return { id, url };
    } catch (error) {
      // Handle Square-specific API errors
      if (error instanceof ApiError && error.errors?.[0]) {
        const squareError = error.errors[0];
        console.error('Square API Error:', squareError);
        throw new Error(`Square Error (${squareError.category}: ${squareError.detail})`);
      } else if (error instanceof Error) {
        // Handle standard JavaScript errors
        throw new Error(`Unexpected Error: ${error.message}`);
      } else {
        // Handle unknown error types
        throw new Error('An unknown error occurred');
      }
    }
  }
}
