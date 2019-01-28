/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import EditableName from './name/EditableName';
import Cat from '../images/cat.png';
import EditableTel from './tel/EditableTel';
import EditableEmail from './email/EditableEmail';
import EditableInterests from './interests/EditableInterests';
import InlineUserData from './InlineUserData';

const getInterestsFromLocalStorage = (defaultInterests) => {
  const JSONinterests = localStorage.getItem('interests');
  if (!JSONinterests) return defaultInterests;
  try {
    JSON.parse(JSONinterests);
  } catch (error) {
    if (error) return defaultInterests;
  }
  const interests = JSON.parse(JSONinterests);
  return interests instanceof Array ? interests : defaultInterests;
};

class Profile extends Component {
  state = {
    name: localStorage.getItem('name') || 'Виталя Гора',
    tel: localStorage.getItem('tel') || '74405543212',
    email: localStorage.getItem('email') || 'vitalya@gora.ru',
    interests: getInterestsFromLocalStorage(['музыка', 'компьютеры', 'радио']),
    editingField: '',
  }


  onEdit = (fieldName) => {
    this.setState({ editingField: fieldName });
  }

  onChange = (fieldName, value) => {
    const JSONValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(fieldName, JSONValue);
    if (localStorage.getItem(fieldName) === JSONValue) {
      this.setState({ [fieldName]: value, editingField: '' });
    }
  }

  render() {
    const generatePropsForEditable = (fieldName) => {
      const { editingField, [fieldName]: value } = this.state;
      const { onChange, onEdit } = this;
      return {
        isEditing: editingField === fieldName,
        value,
        onChange,
        onEdit,
      };
    };
    return (
      <div className="main profile">
        <div className="avatar-section">
          <img id="avatar" src={Cat} alt="Cat" />
          <button type="button" id="add-to-freinds-btn">Добавить в друзья</button>
        </div>
        <div className="user-data">
          <header>
            <EditableName {...generatePropsForEditable('name')} />
            <span id="city"><small>г. Нижние Шахты</small></span>
          </header>
          <div className="lined-user-data-section">
            <InlineUserData name="Семейное положение" value={<span className="user-data-line-value">холост</span>} />
            <InlineUserData name="Телефон" value={<EditableTel {...generatePropsForEditable('tel')} />} />
            <InlineUserData name="E-mail" value={<EditableEmail {...generatePropsForEditable('email')} />} />
          </div>
          <div className="interests-section">
            <b>Интересы</b>
            <EditableInterests {...generatePropsForEditable('interests')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
