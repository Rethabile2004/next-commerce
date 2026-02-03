// programmer: rethabile eric siase
// github.com/rethabile2004

// this component displays items the user has added to favorites
import { fetchUserFavoritesAction } from '@/utils/actions';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/product/ProductsGrid';

async function FavoritesPage() {
  const favorites = await fetchUserFavoritesAction();
  if (favorites.length === 0)
    return <SectionTitle text='You have no favorites yet.' />;

  return (
    <div>
      <SectionTitle text='Favorites' />
      <ProductsGrid products={favorites.map((value) => value.product)} />
    </div>
  );
}

export default FavoritesPage;