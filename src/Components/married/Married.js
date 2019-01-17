/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Married = ({ onEdit, value }) => (
  <span className="editable user-data-line-value" onClick={() => onEdit('married')}>
    {value ? 'женат/замужем' : 'холост/не замужем'}
  </span>
);

Married.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default Married;
