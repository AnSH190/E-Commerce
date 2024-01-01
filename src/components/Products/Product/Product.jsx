import "./Product.scss";
import product from "../../../assets/products/earbuds-prod-1.webp";
import {NavLink} from 'react-router-dom'

const Product = ({ productId, productName, price, source}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  };

  return (
    <div className="product-card">
      <NavLink to={`/product/${productId}`} onClick={scrollToTop}>
        <div className="thumbnail">
          <img src={source} alt="product1" />
        </div>
        <div className="prod-details">
          <span className="name">{productName}</span>
          <span className="price">&#8377; {price}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
