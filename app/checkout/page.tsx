'use client';
import axios from 'axios';
import { redirect, useSearchParams } from 'next/navigation';
import React, { useCallback, Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { toast } from 'sonner';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function CheckoutForm() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const cartId = searchParams.get('cartId');

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post('/api/payment', {
      orderId: orderId,
      cartId: cartId,
    });
    return response.data.clientSecret;
  }, [orderId, cartId]);

  const options = {
    fetchClientSecret,
    onComplete: () => {
      toast.success('Order created successfully.')
      redirect('/orders');
    }
  };


  return (
    <div id='checkout'>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutForm />
    </Suspense>
  );
}
