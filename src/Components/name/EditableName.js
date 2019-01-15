import React from 'react';
import PropTypes from 'prop-types';
import Name from './Name';
import EditNameForm from './EditNameForm';

const EditableName = ({
  isEditing, value, onChange, onEdit,
}) => (
  isEditing
    ? <EditNameForm value={value} onSave={onChange} />
    : <Name value={value} onEdit={onEdit} />
);

EditableName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditableName;
