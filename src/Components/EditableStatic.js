import React from 'react';
import PropTypes from 'prop-types';

const EditableStatic = ({
  onEdit, value, formatValue, validate, buttonId, fieldName,
}) => (
  <button
    id={buttonId}
    type="button"
    className={`editable link-styled${validate(value) ? '' : ' bad'}`}
    onClick={() => onEdit(fieldName)}
  >
    {formatValue(value)}
  </button>
);

EditableStatic.propTypes = {
  buttonId: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  formatValue: PropTypes.func,
  validate: PropTypes.func,
  fieldName: PropTypes.string.isRequired,
};

EditableStatic.defaultProps = {
  formatValue: value => value,
  validate: value => value,
};

export default EditableStatic;
