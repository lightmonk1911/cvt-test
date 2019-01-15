import React from 'react';
import PropTypes from 'prop-types';


const InterestButton = ({ name, onClick }) => (
  <button
    type="button"
    onClick={() => onClick()}
  >
    {name}
  </button>
);

InterestButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default InterestButton;
