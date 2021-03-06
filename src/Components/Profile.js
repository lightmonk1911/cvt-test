/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Editable from './Editable';
import EditableInterests from './interests/EditableInterests';
import InlineUserData from './InlineUserData';
import AvatarSection from './AvatarSection';
import propsForEditableGenerator from './propsForEditableGenerator';

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
    const generatePropsForEditable = propsForEditableGenerator.bind(this);
    return (
      <div className="main profile">
        <AvatarSection />
        <div className="user-data">
          <header>
            <h2>
              <Editable {...generatePropsForEditable('name')} />
            </h2>
            <span id="city"><small>г. Нижние Шахты</small></span>
          </header>
          <div className="lined-user-data-section">
            <InlineUserData name="Семейное положение" value={<span className="user-data-line-value">холост</span>} />
            <InlineUserData name="Телефон" value={<Editable {...generatePropsForEditable('tel')} />} />
            <InlineUserData name="E-mail" value={<Editable {...generatePropsForEditable('email')} />} />
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
