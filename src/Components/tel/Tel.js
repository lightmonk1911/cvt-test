import React from 'react';
import { formatFromString } from './Format';

const Tel = ({ onEdit, value }) => (
  <p className="editable" onClick={() => onEdit('tel')} >{formatFromString(value)}</p>
);

export default Tel;
