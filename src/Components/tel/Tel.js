import React from 'react';
import PropTypes from 'prop-types';
import { formatFromString } from './Format';

const Tel = ({ onEdit, value }) => (
  <button type="button" className="editable user-data-line-value link-styled" onClick={() => onEdit('tel')}>
    {formatFromString(value)}
  </button>
);

Tel.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Tel;
