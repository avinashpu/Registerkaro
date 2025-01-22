import React from 'react';
import './Footer.css';
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>
          Design outstanding interfaces with advanced Figma features in a matter
          of minutes.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </a>
          <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
            <FaApple />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>START A BUSINESS</h4>
          <ul>
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div>
          <h4>GOVERNMENT REGISTRATION</h4>
          <ul>
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4>COMPLIANCE & TAX</h4>
          <ul>
            <li>Channels</li>
            <li>Scale</li>
            <li>Within the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>
        <div>
          <h4>BIG & CDDC</h4>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Leadership</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
        <button className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
