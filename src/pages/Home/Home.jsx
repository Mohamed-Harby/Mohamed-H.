// src/pages/Home/Home.jsx
import React from 'react';
import './Home.scss';
import NavLinks from '../../components/NavLinks/NavLinks';
import Blog from '../Blog/Blog';

import image from '../../assets/images/pic.jpg'
export const Home = () => {
  return (
    <div className="home">
      <div className="profile-section">
        <img src={image} alt="Profile" className='profile-img'/>
        <div className="profile-info">
          <h1>Mohamed H.</h1>
          <p>Developer Experience at Spring Framework & React Framework
          </p>
        </div>
      </div>
      <p className="bio">
        What I'm learning about shipping great products, becoming a better developer, and growing a career in tech.
      </p>
      <NavLinks />

      <br /> <br /> <br /> <br /> <br />
      <Blog />

    </div>
  );
};

// export default Home;
