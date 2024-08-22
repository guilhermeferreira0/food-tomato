import { useProducts } from "../../contexts/ProductsContext/useProducts";

export function ProductsPage() {
  const { products } = useProducts();

  const totalPrice = () => {
    return products.reduce((acc, vl) => acc + vl.price, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
  }

  return (
    <div className="bg-slate-300 rounded-md p-5">
      <table className="border w-full">
        <thead>
          <tr className="h-10 text-lg font-semibold text-gray-600">
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr className="border h-8 text-sm">
              <th>{prod.name}</th>
              <th>{prod.description}</th>
              <th>{prod.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</th>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-red-300">
          <tr>
            <th colSpan={2}>Total</th>
            <th>{totalPrice()}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}