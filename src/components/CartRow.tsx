import { AiOutlineClose } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { useState, useEffect } from "react";

interface CartRowProps {
  prod: any;
  updateProduct: (id: number, quantity: number) => void;
  deleteProduct: (id: number) => void;
}

const CartRow = ({ prod, updateProduct, deleteProduct }: CartRowProps) => {
  const [quantity, setQuantity] = useState<number>(prod.quantity);

  useEffect(() => {
    updateProduct(prod.id, quantity);
  }, [quantity]);

  return (
    <tr className="cart-product-row">
      <td className="prod-remove">
        <AiOutlineClose
          onClick={() => {
            deleteProduct(prod.id);
          }}
        />
      </td>
      <td className="prod-image-item">
        <img className="image" src={prod.image} alt={prod.name} />
      </td>
      <td className="prod-name">{prod.title}</td>
      <td className="prod-price">${prod.price.toFixed(2)}</td>
      <td className="prod-quant">
        <div className="counter">
          <button
            className="quant-btn"
            onClick={() => {
              setQuantity((prev: any) => {
                if (prev === 1) {
                  return 1;
                }
                return prev - 1;
              });
            }}
          >
            <HiMinus fontSize={18} fill="#c5c5c5" />
          </button>
          <p className="quant-val">{quantity}</p>
          <button
            className="quant-btn"
            onClick={() => {
              setQuantity((prev: any) => {
                return prev + 1;
              });
            }}
          >
            <BsPlus fontSize={18} fill="#c5c5c5" />
          </button>
        </div>
      </td>
      <td className="prod-total">${(prod.quantity * prod.price).toFixed(2)}</td>
    </tr>
  );
};

export default CartRow;
