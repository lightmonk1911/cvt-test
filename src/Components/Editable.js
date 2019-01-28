import React from 'react';
import PropTypes from 'prop-types';
import EditForm from './EditForm';
import Name from './Name';
import Tel from './Tel';
import { formatFromString } from './tel/Format';
import onTelInputChange from './tel/onChange';
import onTelInputKeyDown from './tel/onKeyDown';
import Email from './Email';

const EditableElements = {
  name: {
    static: Name, customProps: { fieldName: 'name', id: 'edit-name-form', placeholder: 'Иван Петров' },
  },
  tel: {
    static: Tel,
    customProps: {
      fieldName: 'tel',
      id: 'edit-tel-form',
      placeholder: '+7 (900) 123-45-67',
      formatValue: formatFromString,
      onChange: onTelInputChange,
      onKeyDown: onTelInputKeyDown,
    },
  },
  email: {
    static: Email, customProps: { fieldName: 'email', id: 'edit-email-form', placeholder: 'email@domain.ru' },
  },
};

const Editable = ({
  isEditing, value, onChange, onEdit, fieldName,
}) => {
  if (!isEditing) {
    return React.createElement(EditableElements[fieldName].static, { value, onEdit });
  }
  return (
    <EditForm
      value={value}
      onSave={onChange}
      {...EditableElements[fieldName].customProps}
    />
  );
};

Editable.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default Editable;
