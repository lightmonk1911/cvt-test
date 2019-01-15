/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Married = ({ onEdit, value }) => (
  <p className="editable" onClick={() => onEdit('married')}>{value ? 'женат/замужем' : 'холост/не замужем'}</p>
);

Married.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default Married;
