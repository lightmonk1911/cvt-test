import React from 'react';
import PropTypes from 'prop-types';
import Married from './Married';
import EditMarriedForm from './EditMarriedForm';

const EditableMarried = ({
  isEditing, value, onChange, onEdit,
}) => (
  isEditing
    ? <EditMarriedForm value={value} onSave={onChange} />
    : <Married value={value} onEdit={onEdit} />
);

EditableMarried.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditableMarried;
