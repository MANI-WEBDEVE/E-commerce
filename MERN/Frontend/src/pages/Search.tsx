import { useState } from "react";
import ProductCard from "../components/Product-card";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [maxPrize, setMaxPrize] = useState<number>(10000);
  const [category, setCategory] = useState<string>("");
  const [pagination, setPagination] = useState<number>(1);

  const addToCart = () => {};

  const isPrevious = false;
  const isNext = true;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filter</h2>
        <div>
          <h2>Sort</h2>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div>
          <h2>Max Prize</h2>

          <p>{maxPrize}</p>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrize}
            onChange={(e) => setMaxPrize(Number(e.target.value))}
          />
        </div>
        <div>
          <h2>Category</h2>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="accesories">Accesories</option>
          </select>
        </div>
      </aside>
      <main>
        <div className="product-search-header">
          <h2>Products</h2>
          <input
            type="text"
            placeholder="Enter Your Product Name ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="product-container-list">
          <ProductCard
            name="Mac Book"
            photo="https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"
            price={2000}
            stock={20}
            productId="1"
            handler={addToCart}
          />
        </div>
        <article>
          <button disabled={!isPrevious} onClick={() => setPagination((prev) => prev - 1)} >Prev</button>
          <span>{pagination} of 4</span>
        <button disabled={!isNext} onClick={() => setPagination((prev) => prev + 1)} >Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
