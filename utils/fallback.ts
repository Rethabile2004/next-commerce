import type { Product } from '@prisma/client';
import seedProducts from '@/prisma/products.json';

// This catalogue is deliberately local so product pages still render when the
// Supabase Postgres project is paused or otherwise unreachable.
const fallbackDate = new Date('2025-01-01T00:00:00.000Z');

export const fallbackProducts: Product[] = seedProducts.map((product, index) => ({
  ...product,
  id: `offline-product-${index + 1}`,
  createdAt: fallbackDate,
  updatedAt: fallbackDate,
}));

export const offlineMessage =
  'The store is currently in offline mode. Changes and checkout are temporarily unavailable.';

export const findFallbackProduct = (productId: string) =>
  fallbackProducts.find((product) => product.id === productId) ?? null;

export const logDatabaseFallback = (operation: string, error: unknown) => {
  console.warn(`Database unavailable during ${operation}; using offline fallback.`, error);
};
