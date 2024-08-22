import { useProducts } from "../../contexts/ProductsContext/useProducts"
import { stars } from "../../types/starTypes"

interface FoodTopProps {
  imageUrl: string
  title: string
  description: string
  price: number
  stars: stars
}

export function FoodTop({ imageUrl, title, description, price, stars }: FoodTopProps) {
  const { setCartItems } = useProducts();

  return(
    <section className="shadow-xl rounded-xl relative hover:scale-105 transition-all">
      <img src={imageUrl} alt={title} className="bg-gray-200 rounded-t-xl w-full"/>
      <button 
        className="absolute top-[50%] -translate-y-1/2 right-2 bg-white py-[2px] px-2 rounded-full font-semibold text-center text-xl"
        onClick={(() => setCartItems((prev: any) => [...prev, { imageUrl, title, description, price}]))}
      >
        +
      </button>
      <div className="p-5 flex flex-col gap-2">
        <div>
          <h5 className="text-lg font-bold">{title}</h5>
        </div>
        <p className="text-gray-500 text-xs font-semibold text-justify">{description}</p>
        <strong>{price.toLocaleString('pt-BR', {style: "currency", currency: 'BRL'})}</strong>
      </div>
    </section>
  );
}