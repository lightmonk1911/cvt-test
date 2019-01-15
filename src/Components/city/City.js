/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const City = ({ onEdit, value }) => (
  <small className="editable" onClick={() => onEdit('city')}>
    {`г. ${value}`}
  </small>
);

City.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default City;
