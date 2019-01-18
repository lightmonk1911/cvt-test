import React from 'react';
import PropTypes from 'prop-types';

const FriendCard = ({ name, online, city }) => (
  <div>
    <p>{name}</p>
    <p>{online ? 'online' : null}</p>
    <p>{city}</p>
  </div>
);

FriendCard.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
};

export default FriendCard;
