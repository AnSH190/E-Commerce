import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
import {NavLink} from 'react-router-dom'
import cat2  from "../../../assets/category/cat-2.jpg"
import cat3  from "../../../assets/category/cat-3.jpg"
import cat4  from "../../../assets/category/cat-4.jpg"

const Category = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="shop-by-category" id="cat">
      <div className="categories">
        <div className="category">
          <NavLink to="/category/1" onClick={scrollToTop}>
            <img src={cat1} alt="cat1" />
          </NavLink>
        </div>
        <div className="category">
          <NavLink to="/category/2" onClick={scrollToTop}>
            <img src={cat2} alt="cat1" />
          </NavLink>
        </div>
        <div className="category">
          <NavLink to="/category/3" onClick={scrollToTop}>
            <img src={cat3} alt="cat1" />
          </NavLink>
        </div>
        <div className="category">
          <NavLink to="/category/4" onClick={scrollToTop}>
            <img src={cat4} alt="cat1" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Category;
