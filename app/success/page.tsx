'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, LoaderCircle, Package } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const hasConfirmed = useRef(false);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (!sessionId || hasConfirmed.current) return;

    hasConfirmed.current = true;

    fetch('/api/confirm-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Confirmation failed');
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [sessionId]);

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="animate-spin">
          <LoaderCircle />
        </span>
        <p className="mt-4 text-sm text-gray-500">Confirming payment...</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-600">Payment Issue</h1>
        <p className="mt-2 text-center">
          Your payment was received, but we failed to confirm your order.
          Please contact support with your session ID.
        </p>
        {sessionId && (
          <p className="text-sm text-gray-500 mt-2">Session ID: {sessionId}</p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="mx-auto bg-green-100 dark:bg-green-950/40 rounded-full p-6 w-24 h-24 flex items-center justify-center">
          <CheckCircle2 className="h-14 w-14 text-green-600 dark:text-green-400" strokeWidth={2.5} />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Payment Successful!
          </h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your order.
          </p>
        </div>

        \        <div className="bg-muted/50 border rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3 text-left">
            <Package className="h-6 w-6 text-primary mt-0.5 shrink-0" />
            <p className="text-base leading-relaxed">
              Your order has been received and is now being processed.
              You’ll receive a confirmation email shortly with all the details.
            </p>
          </div>

          {sessionId && (
            <p className="text-xs text-muted-foreground pt-2 border-t">
              Reference: {sessionId.slice(0, 8)}...
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild size="lg" className="flex-1 gap-2">
            <Link href="/orders">
              View My Orders
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="flex-1">
            <Link href="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground pt-6">
          Questions? Contact support anytime.
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen">
          <span className="animate-spin">
            <LoaderCircle />
          </span>
          <p className="mt-4 text-sm text-gray-500">Loading success details...</p>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
