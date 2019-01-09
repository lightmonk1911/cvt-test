import React from 'react';

const Tel = ({ onEdit, value }) => (
  <p className="editable" onClick={() => onEdit('tel')} >{value}</p>
);

export default Tel;
