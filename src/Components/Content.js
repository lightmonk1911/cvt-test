import React from 'react';
import Profile from './Profile';
import Friends from './Friends';

const tabs = {
  profile: <Profile />,
  friends: <Friends />,
};

const Content = ({ active }) => tabs[active];

export default Content;
