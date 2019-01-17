import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({
  text, tabName, changeTab, active,
}) => (
  <li className="nav-item">
    <button
      type="button"
      onClick={() => changeTab(tabName)}
      className={`nav-link ${active === tabName ? 'active' : ''}`}
    >
      {text}
    </button>
  </li>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default NavItem;
