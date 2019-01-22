/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

const FriendCard = ({
  name, online, city, avatarNumber,
}) => {
  const pathToAvatar = require(`../images/avatars/${avatarNumber}.jpg`);
  return (
    <li className="friend-card">
      <img src={pathToAvatar} alt={`Фото ${name}`} className="small-avatar" />
      <div className="friend-data">
        <h3><button className="link-styled friend-name" type="button">{name}</button></h3>
        <p className="friend-city">{`г. ${city}`}</p>
        <small className="friend-online-status">{online ? 'Online' : null}</small>
      </div>
    </li>
  );
};

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  avatarNumber: PropTypes.number.isRequired,
};

export default FriendCard;
