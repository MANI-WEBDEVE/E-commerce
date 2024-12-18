import { Link } from "react-router-dom"
import ProductCard from "../components/Product-card"

const Home = () => {
  const addToCart = () => {
    console.log("Added to cart")
  }
  return (
    <div className="home-page">
    <section className="image-container">

    </section>
    <section className="latest-product">
    <h1>Latest Product</h1>
    <Link to={"/search"}>More</Link>
    </section>

    <main>
      <ProductCard name="Mac Book" photo="https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"
      price={2000}
      stock={20}
      productId="1"
      handler={addToCart}
      />
    </main>
    </div>
  )
}

export default Home
