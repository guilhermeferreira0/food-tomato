

export function CartPage() {
  return(
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
          <tr>
            <th></th>
          </tr>
        </tbody>
        
        <tfoot className="bg-red-300">
          <tr>
            <th colSpan={2}>Total</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
