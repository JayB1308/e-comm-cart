import { useRecoilState } from "recoil";
import { currentProductsState } from "../atoms/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import CartRow from "../components/CartRow";
const ShoppingCart = () => {
  let navigate = useNavigate();

  const [currentProducts, setCurrentProducts] =
    useRecoilState(currentProductsState);

  const [products, setProducts] = useState<Array<any>>([]);
  const [total, setTotal] = useState<number>(0);

  const findProduct = (id: number) => {
    const prod = data.find((ele) => ele.id === id);
    return prod;
  };

  const updateQuantity = (id: number, quant: number) => {
    setProducts((prev: any) => {
      const newState = prev.map((ele: any) => {
        if (ele.id === id) {
          return { ...ele, quantity: quant };
        }
        return ele;
      });
      return newState;
    });
    calculate_total();
  };

  const calculate_total = () => {
    let total_price = 0;
    products.forEach((prod: any) => {
      total_price = total_price + prod.price * prod.quantity;
    });
    setTotal(total_price);
  };

  const deleteProduct = (id: number) => {
    setProducts(
      products.filter((prod: any) => {
        return prod.id !== id;
      })
    );
  };

  useEffect(() => {
    calculate_total();
  }, [products]);

  useEffect(() => {
    const newProducts: Array<any> = [];
    currentProducts.forEach((prod: any) => {
      const product = findProduct(prod.id);
      newProducts.push({ ...product, quantity: prod.quantity });
    });
    setProducts(newProducts);
  }, [currentProducts]);

  return (
    <div className="shopping-cart-container">
      <h1 className="shopping-cart-header">Your Cart</h1>
      <div className="shopping-cart-section">
        <div className="cart-items-section">
          <table>
            <thead>
              <tr>
                <th className="product-header">Product</th>
                <th className="price-header">Price</th>
                <th className="quant-header">Quantity</th>
                <th className="total-header">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => {
                return (
                  <CartRow
                    key={prod.id}
                    prod={prod}
                    updateProduct={updateQuantity}
                    deleteProduct={deleteProduct}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="cart-total-section">
          <h3>Cart totals</h3>
          <div className="total-container">
            <span className="subtotal">
              <p>Subtotal</p>
              <p className="total-blue-text">${total.toFixed(2)}</p>
            </span>
            <span className="total">
              <p>Total</p>
              <p className="total-blue-text">${total.toFixed(2)}</p>
            </span>
          </div>
          <button
            className="proceed-checkout"
            onClick={() => {
              navigate("/thank-you");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
