import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartItemsCount, isLogged, categoryRef }) => {

   const navigate = useNavigate()

  const handleScrollView = () => {
    navigate('/') 
    setTimeout(() => {
       categoryRef.current?.scrollIntoView({ behavior: "smooth" });
    },300)
   
  }
  return (
    <nav>
      <div className="nav-cont-1">
        <h2 className="nav-h2" onClick={() => navigate("/")}>
          Tee-<span style={{ fontWeight: "400" }}>store</span>
        </h2>
        <ul className="nav-ul">
          <Link to={"/products"}>Products</Link>
          <span className="about-span" onClick={handleScrollView}>
            Shop
          </span>
          <a href="##">About</a>
        </ul>
      </div>

      <div className="nav-cont-2">
        {!isLogged && <button onClick={()=> navigate('/login')} className="login-nav">Login</button>}
        <AiOutlineSearch size={25} />
        <Link  to={"/cart"} className="cart-icon-cont">
          <span className="nav-cart-count">{cartItemsCount}</span>
          <HiShoppingCart
            size={25}
            style={{
              marginRight: "10px",
              marginLeft: "15px",
              marginBottom: "-5px",
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
