import React from 'react';
import Name from './Name';
import EditNameForm from './EditNameForm';

const EditableName = ({ isEditing, value, onChange, onEdit }) => {
  return isEditing
    ? <EditNameForm value={value} onSave={onChange} />
    : <Name value={value} onEdit={onEdit} />;
};

export default EditableName;
