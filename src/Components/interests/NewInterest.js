import React from 'react';
import PropTypes from 'prop-types';
import InterestButton from './InterestButton';
import NewInterestField from './NewInterestField';

const NewInterest = ({
  isEditing, onAddInterest, onSave,
}) => (
  isEditing
    ? <NewInterestField onSave={onSave} />
    : <InterestButton onClick={onAddInterest} name="+" />
);

NewInterest.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onAddInterest: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default NewInterest;
