import React from 'react';

const Email = ({ onEdit, value }) => (
  <p className="editable" onClick={() => onEdit('email')} >{value}</p>
);

export default Email;
