import db from '@/utils/db'

export const fetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            featured: true
        }
    })
    return products
}

export const fetchAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

import { redirect } from 'next/navigation';

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findMany({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect('/products');
  }
  return product[0];
};