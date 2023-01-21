import React from 'react';

const Header = () => {
  return (
    <nav className='green darken-1'>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo">React Movies App</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/Wishtrader">Repo</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
