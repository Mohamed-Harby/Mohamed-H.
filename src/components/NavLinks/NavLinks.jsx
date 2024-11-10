import React from 'react'
import { BsYoutube, BsTwitter, BsLinkedin, BsGithub, BsX, BsFacebook } from 'react-icons/bs';
import { RiVideoLine } from 'react-icons/ri';
import { FaBlog } from 'react-icons/fa';

import "./NavLinks.scss"
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div>
        <div className="nav-links">
        <Link to="/blog" className="nav-link">
          <FaBlog /> Blog
        </Link>
        <a 
          href="https://www.linkedin.com/in/moharby" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <BsLinkedin /> LinkedIn
        </a>
        <a 
          href="https://github.com/Mohamed-Harby" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <BsGithub /> GitHub
        </a>
        <a 
          href="https://www.youtube.com/@mohamed-harby-ce" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <BsYoutube /> YouTube
        </a>
      </div>
    </div>
  )
}

export default NavLinks