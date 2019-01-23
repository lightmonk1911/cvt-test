import React from 'react';
import PropTypes from 'prop-types';


const InterestButton = ({ name, onClick, title }) => (
  <button
    className="interest-button"
    type="button"
    onClick={() => onClick()}
    title={title || `Удалить интерес "${name}"`}
  >
    {name}
  </button>
);

InterestButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

InterestButton.defaultProps = {
  title: null,
};

export default InterestButton;
