'use client';

import { LoaderCircle } from 'lucide-react';
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p className="mt-2">Thank you for your purchase. Your order is being processed.</p>
      {sessionId && (
        <p className="text-sm text-gray-500 mt-2">Session ID: {sessionId}</p>
      )}
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
