// programmer: rethabile eric siase
// github.com/rethabile2004

// this component renders the users cart and allows the user to place their oders and view the cart total
import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import EmptyState from '@/components/global/EmptyState';
import SectionTitle from '@/components/global/SectionTitle';
import { fetchOrCreateCart, updateCart } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import type { CartItemWithProduct } from '@/utils/types';
import type { Cart } from '@prisma/client';

async function CartPage() {
  const { userId } = await auth();
  if (!userId) redirect('/');
  let cartItems: CartItemWithProduct[];
  let currentCart: Cart;
  try {
    const previousCart = await fetchOrCreateCart({ userId });
    ({ cartItems, currentCart } = await updateCart(previousCart));
  } catch {
    return <EmptyState
      type="cart"
      title="Cart unavailable while the store is offline"
      description="Your cart is safely unchanged. Please try again when the database is back online."
      actionLabel="Browse Products"
      actionHref="/products"
    />;
  }

  if (cartItems.length === 0) {
    return <EmptyState 
      type="cart"
      actionLabel="Shop Now"
      actionHref="/products"
    />
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}
export default CartPage;
