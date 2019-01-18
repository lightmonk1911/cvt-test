/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

const FriendCard = ({
  name, online, city, index,
}) => {
  const pathToAvatar = require(`../images/avatars/${index + 1}.jpg`);
  return (
    <div className="friend-card">
      <img src={pathToAvatar} alt="ava" className="small-avatar" />
      <div className="friend-data">
        <h3 className="friend-name">{name}</h3>
        <p className="friend-city">{`г. ${city}`}</p>
        <small className="friend-online-status">{online ? 'Online' : null}</small>
      </div>
    </div>
  );
};

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default FriendCard;
