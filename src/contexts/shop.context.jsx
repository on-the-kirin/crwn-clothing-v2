import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";
export const ShopContext = createContext({
  products: [],
});

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
