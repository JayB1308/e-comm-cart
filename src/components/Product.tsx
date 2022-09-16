import { useState, useEffect } from "react";
import { BsCart3, BsFillEmojiSmileFill } from "react-icons/bs";
import { BiSad } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { currentProductsState } from "../atoms/index";

interface ProductProps {
  product: any;
}

const Product = ({ product }: ProductProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const [currentProducts, setCurrentProducts] =
    useRecoilState<any>(currentProductsState);

  const updateProduct = (quant: number) => {
    setCurrentProducts((prevState: any) => {
      const newState = prevState.map((prod: any) => {
        if (prod.id === product.id) {
          return { ...prod, quantity: quant };
        }
        return prod;
      });
      return newState;
    });
  };

  const addProduct = () => {
    const itemInd = currentProducts.find((prod: any) => prod.id === product.id);
    if (itemInd === undefined) {
      const newCurrentProduct = { id: product.id, quantity: quantity };
      setCurrentProducts([...currentProducts, newCurrentProduct]);
    }
  };

  useEffect(() => {
    currentProducts.forEach((ele: any) => {
      if (ele.id === product.id) {
        setQuantity(ele.quantity);
        setIsSelected(true);
      }
    });
  }, []);

  return (
    <tr className="product-row">
      <td className="row-product-image">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </td>
      <td className="product-name">{product.title}</td>
      <td className="product-color">{product.color}</td>
      <td className="product-stock">
        {product.in_stock ? (
          <p className="in-stock">
            <BsFillEmojiSmileFill fill="#008000" />
            In Stock
          </p>
        ) : (
          <p className="out-stock">
            <BiSad fill="#d00000" /> Out of Stock
          </p>
        )}
      </td>
      <td className="product-price">${product.price}</td>
      <td className="buy-row">
        <input
          type="number"
          className="quant"
          min={1}
          value={quantity}
          onChange={(e) => {
            setQuantity(parseInt(e.target.value));
            updateProduct(parseInt(e.target.value));
          }}
        />
        <div className="cart-status">
          <BsCart3 fill="#fff" />
        </div>
        <input
          type="checkbox"
          className="add-check"
          checked={isSelected}
          onChange={() => {
            setIsSelected(!isSelected);
            addProduct();
          }}
        />
      </td>
    </tr>
  );
};

export default Product;
