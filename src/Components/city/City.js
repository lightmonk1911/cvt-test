import React from 'react';

const City = ({ onEdit, value }) => (
  <small onClick={() => onEdit('city')} >г. {value}</small>
);

export default City;
