import React from 'react';
import PropTypes from 'prop-types';
import InterestButton from './InterestButton';
import EditForm from '../EditForm';

const NewInterest = ({
  isEditing, onAddInterest, onSave,
}) => (
  isEditing
    ? (
      <EditForm
        onSave={(fieldname, newInterestName) => onSave(newInterestName)}
        placeholder="Sport"
        id="new-interest-form"
        isInterests
      />
    )
    : <InterestButton onClick={onAddInterest} title="Добавить новый интерес" name="+" />
);

NewInterest.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onAddInterest: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default NewInterest;
