/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ onEdit, value }) => (
  <span className="editable" onClick={() => onEdit('email')}>
    {value}
  </span>
);

Email.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Email;
