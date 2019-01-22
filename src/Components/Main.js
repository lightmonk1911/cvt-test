import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Friends from './Friends';

const tabs = {
  profile: <Profile />,
  friends: <Friends />,
};

const Main = ({ active }) => tabs[active];

Main.propTypes = {
  active: PropTypes.string.isRequired,
};

export default Main;
