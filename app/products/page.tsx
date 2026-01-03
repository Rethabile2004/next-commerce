// import ProductsContainer from '@/components/products/ProductsContainer';

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