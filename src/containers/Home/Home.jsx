import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import hcircleimg from "../../assets/Home/hcircleimg.png";
import hcircleimg2 from "../../assets/Home/hcircleimg2.png";
import hcircleimg3 from "../../assets/Home/hcircleimg3.png";
import hcircleimg4 from "../../assets/Home/hcircleimg4.png";
import hcircleimg5 from "../../assets/Home/hcircleimg5.png";
import hcircleimg6 from "../../assets/Home/hcircleimg6.png";
import hb1 from "../../assets/Home/hb1.jpeg";
import hb2 from "../../assets/Home/hb2.png";
import hb3 from "../../assets/Home/hb3.png";

const Home = () => {
  const navigate = useNavigate();

  const heroBanner = [hb3, hb1, hb2];
  const heroBannerSlider = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const mainSections = [
    { id: 1, image: hcircleimg, Title: "Men", path: "/men" },
    { id: 2, image: hcircleimg2, Title: "Women", path: "/women" },
    { id: 3, image: hcircleimg3, Title: "Kids", path: "/kids" },
    { id: 4, image: hcircleimg4, Title: "Footwear", path: "/footwear" },
    { id: 5, image: hcircleimg5, Title: "Beauty", path: "/beauty" },
    { id: 6, image: hcircleimg6, Title: "Accessories", path: "/accessories" },
  ];

  return (
    <div>
      <div className="navbar-slider">
        <Slider {...heroBannerSlider}>
          {heroBanner.map((hero, index) => (
            <div key={index} className="">
              <img
                src={hero}
                alt={`Banner ${index + 1}`}
                className="hero-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="h-circle-box-container">
        {mainSections.map((section, index) => (
          <div
            key={index}
            className="h-circle-box"
            onClick={() => navigate(section.path)}
          >
            <img
              key={index}
              src={section.image}
              alt=""
              className="h-circle-img"
            />
            <p className="h-circle-text">{section.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
