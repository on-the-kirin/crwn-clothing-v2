import { useContext } from "react";
import { ShopContext } from "../../contexts/shop.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="products-container">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
