import CarouselBanner from "../../components/carousel-banner"
import Category from "../../components/category"
import NewProductList from "../../components/product/new-product-list"


const Home = () => {
  return (
    <div>
      <CarouselBanner></CarouselBanner>
      <Category></Category>
      <NewProductList></NewProductList>
      Home
    </div>
  )
}

export default Home