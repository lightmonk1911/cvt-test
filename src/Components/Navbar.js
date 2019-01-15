import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

const navItemsList = [
  { text: 'Профиль', tabName: 'profile' },
  { text: 'Друзья пользователя', tabName: 'friends' },
];

const Navbar = ({ active, changeTab }) => (
  <nav>
    <ul className="nav nav-tabs">
      {navItemsList.map(({ text, tabName }) => (
        <NavItem
          key={tabName}
          text={text}
          tabName={tabName}
          changeTab={changeTab}
          active={active}
        />
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  changeTab: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Navbar;
