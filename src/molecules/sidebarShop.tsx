import { ModelTypes } from "@/types/zeus";
import { useState } from "react";
import { shopProduct } from "./singleProduct";
import { useRouter } from "next/router";
import styles from "../styles/sidebarShop.module.css";

const FilterableProductList = ({
  products,
}: {
  products: ModelTypes["Product"][];
}) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(999999999);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  console.log(products);
  const filteredProducts = products.filter(
    (product) =>
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const routeChange = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <h1>Products</h1>
        <div>
          <label htmlFor="minPrice">Min price:</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">Max price:</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="searchTerm">Search:</label>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ul className={styles.productsContainer}>
        {filteredProducts.map((item) => shopProduct(item, routeChange))}
      </ul>
    </div>
  );
};

export default FilterableProductList;
