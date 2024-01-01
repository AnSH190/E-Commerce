import "./Cart.scss";
import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";
import CartItem from "../Cart/CartItem/CartItem";
import product1 from "../../assets/products/earbuds-prod-1.webp";
import product2 from "../../assets/products/earbuds-prod-2.webp";
import product3 from "../../assets/products/earbuds-prod-3.webp";
import product4 from "../../assets/products/earbuds-prod-4.webp";
import product5 from "../../assets/products/headphone-prod-1.webp";
import product6 from "../../assets/products/headphone-prod-2.webp";
import product7 from "../../assets/products/headphone-prod-3.webp";
import product8 from "../../assets/products/headphone-prod-4.webp";
import product9 from "../../assets/products/speaker-prod-1.webp";
import product10 from "../../assets/products/speaker-prod-2.webp";
import product11 from "../../assets/products/speaker-prod-3.webp";
import product12 from "../../assets/products/speaker-prod-4.webp";
import product13 from "../../assets/products/speaker-prod-5.webp";
import product14 from "../../assets/products/watch-prod-1.webp";
import product15 from "../../assets/products/watch-prod-2.webp";
import product16 from "../../assets/products/watch-prod-3.webp";

const Cart = ({setShowCart}) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* 
        <div className="empty-cart">
          <BsCartX />
          <span>No Products in Cart.</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> 
    */}

        <>
          <CartItem
            productName={
              "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music"
            }
            price={1399}
            source={product2}
          />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Sub Toatl :</span>
              <span className="text total"> &#8377; 1399</span>
            </div>
            <div className="button">
              <button className="checkout-cta">CheckOut</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
