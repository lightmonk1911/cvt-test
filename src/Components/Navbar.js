import React from 'react';

const navItemsList = [
  { text: 'Профиль', tabName: 'profile' },
  { text: 'Друзья пользователя', tabName: 'friends' },
];

const NavItem = ({ text, tabName, changeTab, active }) => (
  <li className="nav-item">
    <button
      type="button"
      onClick={() => changeTab(tabName)}
      className={`mx-1 nav-link ${active === tabName ? 'active' : ''}`}
    >
      {text}
    </button>
  </li>
);

const Navbar = ({ active, changeTab }) => (
  <nav>
    <ul className="nav nav-tabs">
      {navItemsList.map(({ text, tabName }) => (
        <NavItem
          text={text}
          tabName={tabName}
          changeTab={changeTab}
          active={active}
        />
      ))}
    </ul>
  </nav>
);

export default Navbar;
