import React from 'react';
import PropTypes from 'prop-types';
import { validate as validateEmail } from 'isemail';
import EditForm from './EditForm';
import { formatFromString, validate as validateTel } from './tel/Format';
import onTelInputChange from './tel/onChange';
import onTelInputKeyDown from './tel/onKeyDown';
import EditableStatic from './EditableStatic';

const EditableElements = {
  name: {
    staticCustomProps: {
      buttonId: 'user-name',
      fieldName: 'name',
    },
    customProps: {
      fieldName: 'name',
      id: 'edit-name-form',
      placeholder: 'Иван Петров',
    },
  },
  tel: {
    staticCustomProps: {
      buttonId: 'tel',
      fieldName: 'tel',
      formatValue: formatFromString,
      validate: validateTel,
    },
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
    staticCustomProps: {
      buttonId: 'email',
      fieldName: 'email',
      validate: validateEmail,
    },
    customProps: {
      fieldName: 'email',
      id: 'edit-email-form',
      placeholder: 'email@domain.ru',
    },
  },
};

const Editable = ({
  isEditing, value, onChange, onEdit, fieldName,
}) => {
  if (!isEditing) {
    return (
      <EditableStatic
        {...EditableElements[fieldName].staticCustomProps}
        onEdit={onEdit}
        value={value}
      />
    );
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
