import React from 'react';
import PropTypes from 'prop-types';
import { validate } from 'isemail';

const Email = ({ onEdit, value }) => (
  <button
    id="email"
    type="button"
    className={`editable link-styled ${validate(value) ? '' : 'bad'}`}
    onClick={() => onEdit('email')}
  >
    {value}
  </button>
);

Email.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Email;
