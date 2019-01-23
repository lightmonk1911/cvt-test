import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Friends from './Friends';
import generateFriendsList from '../lib/generateFriends';

const friendsList = generateFriendsList(12);

const tabs = {
  profile: <Profile />,
  friends: <Friends friendsList={friendsList} />,
};

const Main = ({ active }) => tabs[active];

Main.propTypes = {
  active: PropTypes.string.isRequired,
};

export default Main;
