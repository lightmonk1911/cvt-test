import React from 'react';
import PropTypes from 'prop-types';
import Tel from './Tel';
import EditTelForm from './EditTelForm';

const EditableTel = ({
  isEditing, value, onChange, onEdit,
}) => (
  isEditing
    ? <EditTelForm value={value} onSave={onChange} />
    : <Tel value={value} onEdit={onEdit} />
);

EditableTel.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditableTel;
