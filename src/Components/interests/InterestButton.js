import React from 'react';

const InterestButton = ({ name, onClick }) => (
  <button
    type="button"
    onClick={() => onClick()}
  >
    {name}
  </button>
);

export default InterestButton;
