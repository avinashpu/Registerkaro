import React from 'react';
import './Header.css';
import logo from '../components/Assets/logo 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
     
      <div className="header-top">
        <div className="header-contact">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <a href="mailto:info@registerkaro.in">info@registerkaro.in</a>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <a href="tel:+918447746183">+91 8447746183</a>
          </span>
        </div>
        <div className="header-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
      </div>

      {/* Main Section */}
      <div className="header-main">
        <div className="logo">
          <img src={logo} alt="Register Karo Logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="talk-expert-btn">Talk An Expert</button>
        </div>
      </div>
    </header>
  );
};

export default Header;