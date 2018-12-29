import React from 'react';

const Tel = ({ onEdit, value }) => (
  <p onClick={() => onEdit('tel')} >{value}</p>
);

export default Tel;
