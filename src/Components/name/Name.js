import React from 'react';

const Name = ({ onEdit, value }) => (
  <h1 onClick={() => onEdit('name')} >{value}</h1>
);

export default Name;
