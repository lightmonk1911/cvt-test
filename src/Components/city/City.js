import React from 'react';
import PropTypes from 'prop-types';

const City = ({ onEdit, value }) => (
  <button
    id="city"
    type="button"
    className="editable link-styled"
    onClick={() => onEdit('city')}
  >
    <small>
      {`г. ${value}`}
    </small>
  </button>
);

City.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default City;
