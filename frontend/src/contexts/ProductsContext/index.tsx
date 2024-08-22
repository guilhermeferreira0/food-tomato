import { createContext, useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import { ContextProps } from "./types";
import { getAllCart } from "../../api/cart";

interface ProductsProviderProps {
  children: JSX.Element
}

export const Context = createContext({} as ContextProps);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      const data = response.data;
      setProducts(data);
    }

    const fetchCart = async () => {
      const response = await getAllCart();
      const data = response.data;
      setCartItems(data);
    }
    
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Context.Provider value={{
      products,
      cartItems,
      setCartItems
    }}>
      {children}
    </Context.Provider>
  );
}