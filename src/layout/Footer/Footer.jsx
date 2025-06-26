import React from "react";
import "../Footer/Footer.css";
import { useNavigate } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <div className="ft-1">
        <section className="ft-1-section">
          <ul>
            <h5>ONLINE SHOPPING</h5>
            <li onClick={() => navigate("/men")}>Men</li>
            <li onClick={() => navigate("/women")}>Women</li>
            <li onClick={() => navigate("/kids")}>Kids</li>
            <li onClick={() => navigate("/accessories")}>Accessories</li>
            <li onClick={() => navigate("/footwear")}>Footwear</li>
            <li onClick={() => navigate("/beauty")}>Beauty</li>
          </ul>
        </section>

        <section className="ft-1-section">
          <ul>
            <h5>CUSTOMERS POLICIES</h5>
            <li>Contact Us</li>
            <li>FAQ's</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </section>

        <section className="ft-1-section">
          <h5>KEEP IN TOUCH</h5>
          <div className="ft-1-section-icons">
            <MdOutlineFacebook className="ft-1-icon" />
            <AiFillTwitterCircle className="ft-1-icon" />
            <AiFillInstagram className="ft-1-icon" />
            <FaYoutube className="ft-1-icon" />
          </div>
        </section>

        <section>
          <div className="ft-1-section-4">
            <TbRosetteDiscountCheckFilled className="ft-1-section-4-icons" />
            <p>
              <span>100% ORIGINAL</span> guarantee for <br />
              all products at fashion.com
            </p>
          </div>
          <div className="ft-1-section-4">
            <TbTruckReturn className="ft-1-section-4-icons" />
            <p>
              <span>RETURN WITHIN 14 DAYS</span> of <br />
              receving your order
            </p>
          </div>
        </section>
      </div>

      <div className="ft-2">
        <section>
          <p>
            In case of concern, <span>Contact Us</span>
          </p>
        </section>

        <section className="ft-2-copyright">
          <RiCopyrightFill />
          <p>
            2025 <span>www.fashion.com</span>. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
