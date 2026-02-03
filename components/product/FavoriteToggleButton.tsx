import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';
async function FavoriteToggleButton({ productId }: { productId: string }) {
  const user = await auth()
  const userId = user.userId;
  
  if (!userId) return <CardSignInButton />
  const favoriteId = await fetchFavoriteId({ productId })

  return (
    <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />
  );
}
export default FavoriteToggleButton;
