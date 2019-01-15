import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({
  text, tabName, changeTab, active,
}) => (
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

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  tabName: PropTypes.string.tabName.isRequired,
  changeTab: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default NavItem;
