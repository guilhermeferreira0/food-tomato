export interface ContextProps {
  products: ProductProps[],
  cartItems: ProductProps[],
  setCartItems: (product: any) => void
}

export interface ProductProps {
  _id: string,
  name: string,
  description: string,
  price: number,
  image: string,
  category: ProductCategoryProps,
  createdAt: Date,
  updatedAt: Date,
}

export interface ProductCategoryProps {
  veg: 'veg'
}

