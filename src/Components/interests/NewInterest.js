import React from 'react';
import InterestButton from './InterestButton';
import NewInterestField from './NewInterestField';

const NewInterest = ({ isEditing, onAddInterest, onSave }) => {
  if (!isEditing) {
    return (
      <InterestButton onClick={onAddInterest} name="+" />
    );
  }
  return (
    <NewInterestField onSave={onSave} />
  );
};

export default NewInterest;
