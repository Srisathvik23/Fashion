import React from "react";
import "../Navbar/Navbar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../assets/mainlogo.png";
import { IoSearchCircleSharp } from "react-icons/io5";
import { BiSolidHeartCircle } from "react-icons/bi";
import { PiShoppingCartFill } from "react-icons/pi";
import {useCart} from '../../contextapi/cartContext';

const Navbar = () => {
  const navigate = useNavigate();

  const { cartCount } = useCart(); // get cart count

  const navbarOffers = [
    " ----  20% OFF on all T-shirts! ---- ",
    " ---- Free delivery on orders above ₹1000! ---- ",
    " ---- Buy 1 Get 1 Free on selected items! ---- ",
    " ---- 10% Cashback on credit card payments! ---- ",
  ];

  const navbarSlider = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="navbar">
      <div className="navbar-slider">
        <Slider {...navbarSlider}>
          {navbarOffers.map((offer, index) => (
            <div key={index} className="">
              {offer}
            </div>
          ))}
        </Slider>
      </div>

      <div className="nb-1">
        <div className="nb-1-logo-section">
          <img src={mainlogo} alt="" onClick={() => navigate("/")} />
          <h1 onClick={() => navigate("/")}>FASHION</h1>
        </div>

        <div className="nb-1-search-login">
          <div className="nb-1-search">
            <input type="text" placeholder="Search Here" />
            <IoSearchCircleSharp className="nb-1-search-icon" />
          </div>
          <button className="nb-1-login" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>

      <div className="nb-2">
        <ul className="nb-2-list">
          <li onClick={() => navigate("/men")}>MEN</li>
          <li onClick={() => navigate("/women")}>WOMEN</li>
          <li onClick={() => navigate("/kids")}>KIDS</li>
          <li onClick={() => navigate("/footwear")}>FOOTWEAR</li>
          <li onClick={() => navigate("/accessories")}>ACCESSORIES</li>
          <li onClick={() => navigate("/beauty")}>BEAUTY</li>
        </ul>

        <div className="nb-2-icons">
          <BiSolidHeartCircle className="nb-2-search-icon" />
          <div style={{ position: "relative" }}>
          <PiShoppingCartFill className="nb-2-search-icon" />
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
