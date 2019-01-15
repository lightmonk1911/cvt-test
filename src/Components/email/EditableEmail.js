import React from 'react';
import PropTypes from 'prop-types';
import Email from './Email';
import EditEmailForm from './EditEmailForm';


const EditableEmail = ({
  isEditing, value, onChange, onEdit,
}) => (
  isEditing
    ? <EditEmailForm value={value} onSave={onChange} />
    : <Email value={value} onEdit={onEdit} />
);

EditableEmail.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditableEmail;
