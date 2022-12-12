import React from 'react';
import './Header.scss';
import logo from '../../../images/ftlogo.png';

export const Header = () => {
  const a = '';

  return (
    <div className="header">
      <img
        src={logo}
        alt="company logo"
        className="header__logo"
      />
      <div>{a}</div>
    </div>
  );
};
