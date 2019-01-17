import React from 'react';
import Profile from './Profile';
import Friends from './Friends';

const tabs = {
  profile: <Profile />,
  friends: <Friends />,
};

const Main = ({ active }) => tabs[active];

export default Main;
