import React from 'react';
import City from './City';
import EditCityForm from './EditCityForm';

const EditableCity = ({ isEditing, value, onChange, onEdit }) => {
  return isEditing
    ? <EditCityForm value={value} onSave={onChange} />
    : <City value={value} onEdit={onEdit} />;
};

export default EditableCity;
