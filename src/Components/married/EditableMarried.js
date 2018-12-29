import React from 'react';
import Married from './Married';
import EditMarriedForm from './EditMarriedForm';

const EditableMarried = ({ isEditing, value, onChange, onEdit }) => {
  return isEditing
    ? <EditMarriedForm value={value} onSave={onChange} />
    : <Married value={value} onEdit={onEdit} />;
};

export default EditableMarried;
