import React from 'react';
import '../components/Hero.css';
import background from '../components/Assets/Section.png'; 

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content">
        <p className="google-rating">
          <span>★</span> Google Rating <strong>★★★★★</strong>
        </p>
        <h1>Your trusted partner for compliance business needs</h1>
        <p className="description">
          An online business compliance platform that helps entrepreneurs and other individuals
          with various <strong>registrations</strong>, <strong>tax filings</strong>, and other{' '}
          <strong>legal matters</strong>.
        </p>
        <div className="stats">
          <div>
            <strong>4.5+</strong>
            <p>Customer Rating</p>
          </div>
          <div>
            <strong>20,000+</strong>
            <p>Clients</p>
          </div>
          <div>
            <strong>99.8%</strong>
            <p>Financial Stability</p>
          </div>
        </div>
        <div className="cta-buttons">
          <button className="btn-primary">Talk An Expert</button>
          <button className="btn-secondary">See how it works</button>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
