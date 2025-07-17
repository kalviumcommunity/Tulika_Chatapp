import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css'; // shared styles for all pages

function Home() {
  return (
    <div className="page home-page">
      <h1>Welcome to React Chat App 💬</h1>
      <p>
        A modern, multi-page chat application built with React. Start chatting instantly,
        explore how it works, or get in touch with us!
      </p>
      <div className="home-buttons">
        <Link to="/chat" className="btn primary">Start Chatting</Link>
        <Link to="/about" className="btn secondary">Learn More</Link>
        <Link to="/contact" className="btn secondary">Contact Us</Link>
      </div>
    </div>
  );
}

export default Home;
