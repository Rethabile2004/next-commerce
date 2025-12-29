import { fetchFeaturedProducts } from "@/utils/actions"
import EmptyList from "../global/EmptyList"
import SectionTitle from "../global/SectionTitle"

const FeaturedProducts = async () => {
    const products = await fetchFeaturedProducts()
    if (products.length === 0) return <EmptyList />
    return (
        <section className="pt-24">
            <SectionTitle text="featured products" />
            <FeaturedProducts /*products={products}*/ />
        </section>)
}

export default FeaturedProducts