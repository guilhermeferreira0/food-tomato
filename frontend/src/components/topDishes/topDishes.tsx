import { useProducts } from '../../contexts/ProductsContext/useProducts';
import {stars} from '../../types/starTypes';
import { FoodTop } from "./foodTop";

export function TopDishes() {
  const { products } = useProducts();

  return (
    <section>
      <h3 className="text-xl font-bold mb-4">Top dishes near you</h3>
      <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {products.map((prod, index) => {
          if (index > 10) return (<></>);
          return (
            <FoodTop
              key={prod._id} 
              title={prod.name}
              description={prod.description}
              imageUrl="/assets/img/macarrao.png"
              price={prod.price}
              stars={stars.disagree}
            />
          )
        })}
      </div>
      </div>
    </section>
  );
}