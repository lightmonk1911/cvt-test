import React from 'react';

const Navbar = ({ active, changeTab }) => (
  <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button

          type="button"
          onClick={() => changeTab('profile')}
          className={`mx-1 nav-link ${active === 'profile' ? 'active' : ''}`}
        >
          Профиль
        </button>
      </li>
      <li className="nav-item">
        <button
          type="button"
          onClick={() => changeTab('friends')}
          className={`mx-1 nav-link ${active === 'friends' ? 'active' : ''}`}
        >
          Друзья пользователя
        </button>
      </li>
    </ul>

  </nav>
);

export default Navbar;
