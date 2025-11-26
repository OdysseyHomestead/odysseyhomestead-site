import React from 'react';
import './WelcomePage.css';
import logo from '../images/logo_white.png';
import banner from '../images/banner.png';

const WelcomePage: React.FC = () => (
  <div className="welcome">
    <header className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${banner})` }}>
      <div className="hero-content">
        <img src={logo} alt="Odyssey Homestead" className="logo" width={180} height={180} loading="lazy" />
        <h1>Odyssey Homestead</h1>
        <p className="tagline">Your journey to sustainable living starts here.</p>
      </div>
    </header>

    <main className="content">
      <section className="features">
        <div className="feature-card">
          <h2>Sustainable Living</h2>
          <p>Experience the harmony of traditional farming methods and modern sustainable practices.</p>
        </div>
        <div className="feature-card">
          <h2>Farm Life</h2>
          <p>Connect with our ducks, chickens, and flourishing gardens in a serene countryside setting.</p>
        </div>
        <div className="feature-card">
          <h2>Artisanal Crafts</h2>
          <p>Discover the beauty of handcrafted pottery and traditional homesteading skills.</p>
        </div>
      </section>

      <section className="social-links">
        <a
          href="https://x.com/odyssey_hs"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary social-link"
          aria-label="Follow Odyssey Homestead on X"
          title="Follow Odyssey Homestead on X"
        >
          <svg className="x-icon" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Follow us on X
        </a>
      </section>
    </main>
  </div>
);

export default WelcomePage;
