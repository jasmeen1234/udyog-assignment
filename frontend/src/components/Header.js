import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <input type="text" placeholder="Search here..." className="search-bar" />
      <div className="profile-info">
        <span>Johnathan Doe</span>
      </div>
    </div>
  );
}

export default Header;
