/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ onEdit, value }) => (
  <h2>
    <button
      id="user-name"
      type="button"
      className="editable link-styled"
      onClick={() => onEdit('name')}
    >
      {value}
    </button>
  </h2>
);

Name.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Name;
