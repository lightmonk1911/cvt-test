function propsForEditableGenerator(fieldName) {
  const { editingField, [fieldName]: value } = this.state;
  const { onChange, onEdit } = this;
  return {
    isEditing: editingField === fieldName,
    fieldName,
    value,
    onChange,
    onEdit,
  };
}

export default propsForEditableGenerator;
