import React from 'react';
import style from "./style.module.css"

const Header = () => (
  <header className={style.header}>
    <h1>Welcome to Next-Js Assignment-2</h1>
    <nav>
      <a href=" /">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/services">Services</a>
    </nav>
  </header>
);

export default Header;
