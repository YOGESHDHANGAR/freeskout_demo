import React from "react";
import "./Navebar.css";
import { Link } from "react-router-dom";
import freeskout from "../images/freeskout.png";

const Navebar = () => {
  return (
    <div className="navbar_container">
      <div className="logo"></div>
      <div className="nav_links_with_logo">
        <Link to="/">
          <img className="logo_img" src={freeskout} />
        </Link>
        <div className="nav_links_without_logo">
          <Link className="link" to="/brands">
            BRANDS
          </Link>
          <Link className="link" to="/influencers">
            INFLUNCERS
          </Link>
          <Link className="link" to="/pricing">
            PRICING
          </Link>
          <Link className="link" to="/blogs">
            BLOGS
          </Link>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
