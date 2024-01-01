import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from "../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import product from "../Products/Products";

const SingleProduct = ({name , source , desc , price , category}) => {
  let [items, setItems] = useState(1);

  const addItems = () => {
    setItems(items + 1);
  };

  const removeItems = () => {
    setItems(items - 1);
  };

  
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            {" "}
            <img src={source} alt="product" />{" "}
          </div>
          <div className="right">
            <span className="name">{name}</span>
            <span className="price">&#8377; {price} </span>
            <span className="desc"> {desc} </span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={removeItems}>-</span>
                <span>{items}</span>
                <span onClick={addItems}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Category :<span> {category} </span>
              </span>
              <span className="text-bold">
                Share
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
