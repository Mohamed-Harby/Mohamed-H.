import React from "react";
import "./Home.scss";
import image from "../../assets/images/pic.jpg";
import WhoAmI from "../../components/WhoAmI/WhoAmI";
import WorkingOn from "../../components/WorkingOn/WorkingOn";

export const Home = () => {
  return (
    <div className="home">
      <div className="profile-section">
        <img src={image} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <h1>Mohamed H.</h1>
          <p>Developer Experience at Spring Framework & React Framework</p>
        </div>
      </div>
      <p className="bio">
        What I'm learning about shipping great products, becoming a better
        developer, and growing a career in tech.
      </p>
      <br />
      <br />
      <WhoAmI />
      <br />
      <br />
      <WorkingOn />
    </div>
  );
};

export default Home;
