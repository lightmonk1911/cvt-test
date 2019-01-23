import React from 'react';
import PropTypes from 'prop-types';
import { formatFromString, validate } from './Format';

const Tel = ({ onEdit, value }) => (
  <button
    id="tel"
    type="button"
    className={`editable link-styled${validate(value) ? '' : ' bad'}`}
    onClick={() => onEdit('tel')}
  >
    {formatFromString(value)}
  </button>
);

Tel.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Tel;
