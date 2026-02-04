import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col">
      <div className="mb-8">
        <Skeleton className="h-10 w-64 rounded-md" /> 
        <Skeleton className="h-1 w-full mt-4 rounded" /> 
      </div>

      <div className="grid gap-8 lg:grid-cols-12 flex-1">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-8 w-32" />
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <CartItemSkeleton key={i} />
          ))}
        </div>

        <div className="lg:col-span-4 lg:pl-4">
          <Card className="sticky top-8">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-2/3" />
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-7 w-32" />
                  <Skeleton className="h-7 w-28" />
                </div>
              </div>

              <Skeleton className="h-12 w-full rounded-lg mt-6" />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="fixed inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm z-50 pointer-events-none">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground text-sm font-medium">
            Loading your cart...
          </p>
        </div>
      </div>
    </div>
  );
}

function CartItemSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-6">          
          <Skeleton className="h-32 w-32 sm:h-40 sm:w-40 rounded-md shrink-0" />

          <div className="flex-1 space-y-4">
            <div className="flex justify-between">
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
              <Skeleton className="h-6 w-20" />
            </div>

            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-8 w-20" /> 
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}