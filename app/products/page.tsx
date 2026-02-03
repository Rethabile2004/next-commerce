// programmer: rethabile eric siase
// github.com/rethabile2004

// this component renders all the products that are available in our database
import ProductsContainer from "@/components/product/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const value= await searchParams
  
  const layout = value.layout || 'grid';
  const search = value.search || '';
  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}
export default ProductsPage