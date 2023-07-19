import React from "react";
import "./Home.css";
import phones_img from "../images/phones_img.png";

const Home = () => {
  return (
    <div className="home_container">
      <div className="content_and_images">
        <div className="content">
          <h1>
            Discover.Connect. <br /> Collaborate.
          </h1>
          <p>An ecosystem for Social media Influencers and Brands.</p>
          <div className="content_button">
            <button className="influencer_button">I'M AM INFLUNCER</button>
            <button className="brand_button">I'M AM BRAND</button>
          </div>
        </div>
        <div className="images">
          <img src={phones_img} />
        </div>
      </div>
      <div className="wave">
        <div className="wave wave1"> </div>
        <div className="wave wave2"> </div>
        <div className="wave wave3"> </div>
      </div>
    </div>
  );
};

export default Home;
