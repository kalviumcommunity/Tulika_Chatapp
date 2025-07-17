import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">💬 React Chat</div>
      <div className="nav-links">
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
        <Link className={location.pathname === '/chat' ? 'active' : ''} to="/chat">Chat</Link>
        <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
        <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
