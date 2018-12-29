import React from 'react';
import Tel from './Tel';
import EditTelForm from './EditTelForm';

const EditableTel = ({ isEditing, value, onChange, onEdit }) => {
  return isEditing
    ? <EditTelForm value={value} onSave={onChange} />
    : <Tel value={value} onEdit={onEdit} />;
};

export default EditableTel;
