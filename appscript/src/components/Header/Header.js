import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header>
      <nav>
        <ul className='ul-list'>
          <li className='li-list'><a href="/">SHOP</a></li>
          <li className='li-list'><a href="/products">SKILLS</a></li>
          <li className='li-list'><a href="/products">STORIES</a></li>
          <li className='li-list'><a href="/about">ABOUT</a></li>
          <li className='li-list'><a href="/products">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;