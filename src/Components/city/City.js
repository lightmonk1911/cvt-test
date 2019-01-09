import React from 'react';

const City = ({ onEdit, value }) => (
  <small className="editable" onClick={() => onEdit('city')} >г. {value}</small>
);

export default City;
