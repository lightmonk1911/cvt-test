import React from 'react';
import PropTypes from 'prop-types';
import City from './City';
import EditCityForm from './EditCityForm';


const EditableCity = ({
  isEditing, value, onChange, onEdit,
}) => (isEditing
  ? <EditCityForm value={value} onSave={onChange} />
  : <City value={value} onEdit={onEdit} />);

EditableCity.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditableCity;
