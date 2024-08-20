import {stars} from '../../types/starTypes';
import { FoodTop } from "./foodTop";

export function TopDishes() {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4">Top dishes near you</h3>
      <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        <FoodTop 
          title="Lasagna Rolls"
          description="food provides essential nutrients for overalll health and wrell-being"
          imageUrl="/assets/img/macarrao.png"
          price={500}
          stars={stars.agree}
        />
        <FoodTop 
          title="Lasagna Rolls"
          description="food provides essential nutrients for overalll health and wrell-being"
          imageUrl="/assets/img/macarrao.png"
          price={500}
          stars={stars.agree}
        />
        <FoodTop 
          title="Lasagna Rolls"
          description="food provides essential nutrients for overalll health and wrell-being"
          imageUrl="/assets/img/macarrao.png"
          price={500}
          stars={stars.agree}
        />
        <FoodTop 
          title="Lasagna Rolls"
          description="food provides essential nutrients for overalll health and wrell-being"
          imageUrl="/assets/img/macarrao.png"
          price={500}
          stars={stars.agree}
        />
        <FoodTop 
          title="Lasagna Rolls"
          description="food provides essential nutrients for overalll health and wrell-being"
          imageUrl="/assets/img/macarrao.png"
          price={500}
          stars={stars.agree}
        />
        <FoodTop 
          title="Lasagna Rolls"
          description="food provides essential nutrients for overalll health and wrell-being"
          imageUrl="/assets/img/macarrao.png"
          price={500}
          stars={stars.agree}
        />
      </div>
      </div>
    </section>
  );
}