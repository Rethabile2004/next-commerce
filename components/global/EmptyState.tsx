import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  PackageX, 
  SearchX 
} from 'lucide-react';

type EmptyStateType = 
  | 'cart' 
  | 'favorites' 
  | 'reviews' 
  | 'orders' 
  | 'products' 
  | 'search';

interface EmptyStateProps {
  type: EmptyStateType;
  title?: string;           
  description?: string;     
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export default function EmptyState({
  type,
  title,
  description,
  actionLabel,
  actionHref = '/products',
  className = '',
}: EmptyStateProps) {
  const configs: Record<EmptyStateType, {
    icon: ReactNode;
    defaultTitle: string;
    defaultDesc: string;
    color: string;
    bgColor: string;
  }> = {
    cart: {
      icon: <ShoppingCart className="w-16 h-16" />,
      defaultTitle: "Your cart is empty",
      defaultDesc: "Looks like you haven't added anything yet. Start shopping now!",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
    },
    favorites: {
      icon: <Heart className="w-16 h-16" />,
      defaultTitle: "No favorites yet",
      defaultDesc: "Save products you love by clicking the heart icon.",
      color: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-50 dark:bg-rose-950/30",
    },
    reviews: {
      icon: <Star className="w-16 h-16" />,
      defaultTitle: "No reviews yet",
      defaultDesc: "Be the first to share your thoughts on a product!",
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
    },
    orders: {
      icon: <PackageX className="w-16 h-16" />,
      defaultTitle: "No orders found",
      defaultDesc: "When you complete your first purchase, it will appear here.",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    products: {
      icon: <PackageX className="w-16 h-16" />,
      defaultTitle: "No products available",
      defaultDesc: "Check back later or try different filters.",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
    },
    search: {
      icon: <SearchX className="w-16 h-16" />,
      defaultTitle: "No results found",
      defaultDesc: "Try different keywords or check for typos.",
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    },
  };

  const config = configs[type] || configs.cart;

  const finalTitle = title || config.defaultTitle;
  const finalDesc = description || config.defaultDesc;

  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div className={`p-6 rounded-full ${config.bgColor} ${config.color} mb-6`}>
        {config.icon}
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        {finalTitle}
      </h2>

      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        {finalDesc}
      </p>

      {actionLabel && actionHref && (
        <Button asChild size="lg" className="min-w-45">
          <Link href={actionHref}>
            {actionLabel}
          </Link>
        </Button>
      )}

      {type === 'cart' && (
        <p className="mt-6 text-sm text-muted-foreground">
          Need inspiration? <Link href="/products" className="text-primary hover:underline">Browse all products</Link>
        </p>
      )}
    </div>
  );
}