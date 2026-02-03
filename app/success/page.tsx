'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
      <p>Thank you for your purchase. Your order is being processed.</p>
      {sessionId && <p className="text-sm text-gray-500 mt-2">Session ID: {sessionId}</p>}
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading success details...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
