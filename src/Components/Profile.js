import React, { Component } from 'react';
import EditableName from './name/EditableName';
import EditableCity from './city/EditableCity';
import EditableMarried from './married/EditableMarried';
import Cat from '../images/cat.png';
import EditableTel from './tel/EditableTel';
import EditableEmail from './email/EditableEmail';
import EditableInterests from './interests/EditableInterests';

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

const extraEditableFieldsEnabled = false;

class Profile extends Component {
  state = {
    name: localStorage.getItem('name') || 'Виталя Гора',
    city: localStorage.getItem('city') || 'Нижние Шахты',
    married: localStorage.getItem('married'),
    tel: localStorage.getItem('tel') || '',
    email: localStorage.getItem('email') || 'vitalya@gora.ru',
    interests: getInterestsFromLocalStorage(['Музыка', 'Компьютеры', 'Радио']),
    editingField: '',
  }

  onEdit = (fieldName) => {
    this.setState({ editingField: fieldName });
  }

  onChange = (fieldName, value) => {
    localStorage.setItem(fieldName, value);
    if (localStorage.getItem(fieldName) === value) {
      this.setState({ [fieldName]: value, editingField: '' });
    }
  }

  onChangeInterests = (value) => {
    const JSONInterests = JSON.stringify(value);
    localStorage.setItem('interests', JSONInterests);
    if (localStorage.getItem('interests') === JSONInterests) {
      this.setState({ interests: value, editingField: '' });
    }
  }

  onAddInterest = () => this.setState({ editingField: 'interest' });

  render() {
    const {
      name, city, married, tel, email, interests, editingField,
    } = this.state;
    return (
      <section className="main profile">
        <div className="avatar-section">
          <img id="avatar" src={Cat} alt="Cat" />
          <button type="button" id="add-to-freinds-btn">Добавить в друзья</button>
        </div>
        <div className="user-data">
          <header>
            <EditableName
              isEditing={editingField === 'name'}
              value={name}
              onChange={this.onChange}
              onEdit={this.onEdit}
            />
            <EditableCity
              isEditing={editingField === 'city'}
              value={city}
              onChange={this.onChange}
              onEdit={this.onEdit}
              extraEditableFieldsEnabled={extraEditableFieldsEnabled}
            />
          </header>
          <section className="lined-user-data-section">
            <div className="inline-user-data">
              <span className="user-data-line-name"><b>Семейное положение </b></span>
              <EditableMarried
                isEditing={editingField === 'married'}
                value={married === 'true'}
                onChange={this.onChange}
                onEdit={this.onEdit}
                extraEditableFieldsEnabled={extraEditableFieldsEnabled}
              />
            </div>
            <div className="inline-user-data">
              <span className="user-data-line-name"><b>Телефон </b></span>
              <EditableTel
                isEditing={editingField === 'tel'}
                value={tel}
                onChange={this.onChange}
                onEdit={this.onEdit}
              />
            </div>
            <div className="inline-user-data">
              <span className="user-data-line-name"><b>E-mail </b></span>
              <EditableEmail
                isEditing={editingField === 'email'}
                value={email}
                onChange={this.onChange}
                onEdit={this.onEdit}
              />
            </div>
          </section>
          <section className="interests-section">
            <b>Интересы</b>
            <EditableInterests
              interests={interests}
              onChange={this.onChangeInterests}
              onAddInterest={this.onAddInterest}
              isEditing={editingField === 'interest'}
            />
          </section>
        </div>
      </section>
    );
  }
}

export default Profile;
