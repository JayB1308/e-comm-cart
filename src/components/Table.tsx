import Product from "./Product";

interface ProductsTableProps {
  products: any;
}

const Table = ({ products }: ProductsTableProps) => {
  return (
    <table className="table-container">
      <thead className="table-head">
        <tr>
          <th className="image-header">Image</th>
          <th className="name-header">Name</th>
          <th className="color-header">Color</th>
          <th className="stock-header">Stock</th>
          <th className="price-header">Price</th>
          <th className="buy-header">Buy</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: any) => {
          return <Product key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
