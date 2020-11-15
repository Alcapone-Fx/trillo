import React from 'react';

import logoImg from '../../assets/img/logo.png';
import userImg from '../../assets/img/user.jpg';
import sprite from '../../assets/img/sprite.svg';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="Trillo logo" className="logo" />
      <form action="/" className="search">
        <input
          type="text"
          placeholder="Search hotels"
          className="search__input"
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-bookmark`}></use>
            <span className="user-nav__notification">?</span>
          </svg>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-chat`}></use>
            <span className="user-nav__notification">13</span>
          </svg>
        </div>
        <div className="user-nav__user">
          <img
            src={userImg}
            alt="User profile"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
