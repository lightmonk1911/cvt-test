/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import EditableName from './name/EditableName';
import EditableTel from './tel/EditableTel';
import EditableEmail from './email/EditableEmail';
import EditableInterests from './interests/EditableInterests';
import InlineUserData from './InlineUserData';
import AvatarSection from './AvatarSection';

const getInterestsFromLocalStorage = () => {
  const JSONinterests = localStorage.getItem('interests');
  if (!JSONinterests) return null;
  try {
    JSON.parse(JSONinterests);
  } catch (error) {
    if (error) return null;
  }
  const interests = JSON.parse(JSONinterests);
  return interests instanceof Array ? interests : null;
};

const defaultState = {
  name: 'Виталя Гора',
  tel: '74405543212',
  email: 'vitalya@gora.ru',
  interests: ['музыка', 'компьютеры', 'радио'],
};

class Profile extends Component {
  state = {
    name: localStorage.getItem('name') || defaultState.name,
    tel: localStorage.getItem('tel') || defaultState.tel,
    email: localStorage.getItem('email') || defaultState.email,
    interests: getInterestsFromLocalStorage() || defaultState.interests,
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
        <AvatarSection />
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
