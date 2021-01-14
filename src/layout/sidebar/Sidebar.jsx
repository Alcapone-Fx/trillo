import React from 'react';

import sprite from '../../assets/img/sprite.svg';
import './Sidebar.scss';

function Sidebar() {
  const iconTextSideNavArray = [
    { icon: 'home', text: 'Hotel' },
    { icon: 'aircraft-take-off', text: 'Flight' },
    { icon: 'key', text: 'Car rental' },
    { icon: 'map', text: 'Tours' },
  ];

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {iconTextSideNavArray.map(({ icon, text }) => {
          let liClassName =
            icon === 'home'
              ? 'side-nav__item side-nav__item--active'
              : 'side-nav__item';

          return (
            <li className={liClassName} key={icon}>
              <a href="/" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-${icon}`}></use>
                </svg>
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="legal">&copy; 2020 by Trillo. All rights reserved.</div>
    </nav>
  );
}

export default Sidebar;
