import React from 'react';
import Email from './Email';
import EditEmailForm from './EditEmailForm';

const EditableEmail = ({ isEditing, value, onChange, onEdit }) => {
  return isEditing
    ? <EditEmailForm value={value} onSave={onChange} />
    : <Email value={value} onEdit={onEdit} />;
};

export default EditableEmail;
