import {MdClose} from "react-icons/md";
import { useState } from "react";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";




const CartItem = ({productName , price , source}) => {

let [items, setItems] = useState(1);

const addItems = () => {
  setItems(items + 1);
};

const removeItems = () => {
  setItems(items - 1);
};

  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={source} alt="" />
        </div>
        <div className="prod-details">
          <span className="name"> {productName} </span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span onClick={removeItems}>-</span>
            <span>{items}</span>
            <span onClick={addItems}>+</span>
          </div>
          <div className="text">
            <span> {items} </span>
            <span>x</span>
            <span className="highlight">&#8377;{price * items} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
