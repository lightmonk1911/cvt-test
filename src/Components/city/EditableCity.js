import React from 'react';
import PropTypes from 'prop-types';
import City from './City';
import EditCityForm from './EditCityForm';


const EditableCity = ({
  isEditing, value, onChange, onEdit, extraEditableFieldsEnabled,
}) => (isEditing
  ? <EditCityForm value={value} onSave={onChange} />
  : <City value={value} onEdit={onEdit} extraEditableFieldsEnabled={extraEditableFieldsEnabled} />);

EditableCity.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  extraEditableFieldsEnabled: PropTypes.bool,
};

EditableCity.defaultProps = {
  extraEditableFieldsEnabled: false,
};

export default EditableCity;
