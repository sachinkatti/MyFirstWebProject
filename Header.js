import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <img src="./icon.png" alt="Logo" className="img-logo" />
        <input type="text" className="input" placeholder="Type something..." />
        <img src="./profile.png" alt="Profile" className="img-profile" />
      </nav>
    </header>
  );
};

export default Header;
