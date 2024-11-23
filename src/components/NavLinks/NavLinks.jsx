import React from 'react'
import { BsYoutube, BsTwitter, BsLinkedin, BsGithub, BsX, BsFacebook } from 'react-icons/bs';
import { SiLeetcode, SiCodeforces, SiTelegram} from "react-icons/si";

import "./NavLinks.scss"
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div>
        <div className="nav-links">
        {/* <Link to="/blog" className="nav-link">
          <FaBlog /> Blog
        </Link> */}
        <a 
          href="https://github.com/Mohamed-Harby" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <BsGithub /> GitHub
        </a>
                <a 
          href="https://www.linkedin.com/in/moharby" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <BsLinkedin /> LinkedIn
        </a>
        <a 
          href="https://codeforces.com/profile/7ARbii" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <SiCodeforces /> Codeforces
        </a>
        <a 
          href="https://leetcode.com/7ARbii/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <SiLeetcode /> Leetcode
        </a>
        <a 
          href="https://leetcode.com/7ARbii/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-link">
          <SiTelegram /> Telegram
        </a>
        
      </div>
    </div>
  )
}

export default NavLinks