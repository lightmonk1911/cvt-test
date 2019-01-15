/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ onEdit, value }) => (
  <h1 className="editable" onClick={() => onEdit('name')}>
    {value}
  </h1>
);

Name.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Name;
