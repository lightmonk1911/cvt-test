/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { formatFromString } from './Format';

const Tel = ({ onEdit, value }) => (
  <p className="editable" onClick={() => onEdit('tel')}>{formatFromString(value)}</p>
);

Tel.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Tel;
