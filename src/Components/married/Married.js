import React from 'react';

const Married = ({ onEdit, value }) => (
  <p onClick={() => onEdit('married')} >{value === 'true' ? 'женат/замужем' : 'холост/не замужем'}</p>
);

export default Married;
