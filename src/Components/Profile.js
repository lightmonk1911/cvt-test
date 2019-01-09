import React, { Component } from 'react';
import EditableName from './name/EditableName';
import EditableCity from './city/EditableCity';
import EditableMarried from './married/EditableMarried';
import Cat from '../images/cat.png';
import EditableTel from './tel/EditableTel';
import EditableEmail from './email/EditableEmail';
import EditableInterests from './interests/EditableInterests';

class Profile extends Component {
  state = {
    name: localStorage.getItem('name') || 'Виталя Гора',
    city: localStorage.getItem('city') || 'Нижние Шахты',
    married: localStorage.getItem('married') || 'Холост',
    tel: localStorage.getItem('tel') || '+7 (440) 554-32-12',
    email: localStorage.getItem('email') || 'vitalya@gora.ru',
    interests: localStorage.getItem('interests') || JSON.stringify(['Музыка', 'Компьютеры', 'Радио']),
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

  render() {
    const { name, city, married, tel, email, interests, editingField } = this.state;
    return (
      <div className="row">
        <div className="col-4 avatar">
          <img src={Cat} alt="Cat" />
          <div>
            <button
              type="button"
            >
              Добавить в друзья
            </button>
          </div>
        </div>
        <div className="col-8 user-data">
          <EditableName isEditing={editingField === 'name'} value={name} onChange={this.onChange} onEdit={this.onEdit} />
          <EditableCity isEditing={editingField === 'city'} value={city} onChange={this.onChange} onEdit={this.onEdit} />
          <div className="row">
            <div className="col-6">
              <p><b>Семейное положение</b></p>
              <p><b>Телефон</b></p>
              <p><b>E-mail</b></p>
            </div>
            <div className="col-6">
              <EditableMarried isEditing={editingField === 'married'} value={married} onChange={this.onChange} onEdit={this.onEdit} />
              <EditableTel isEditing={editingField === 'tel'} value={tel} onChange={this.onChange} onEdit={this.onEdit} />
              <EditableEmail isEditing={editingField === 'email'} value={email} onChange={this.onChange} onEdit={this.onEdit} />
            </div>
          </div>
          <p><b>Интересы</b></p>
          <EditableInterests interests={interests} onDelete={this.onDeleteInterest} onAdd={this.onAddInterest} />
        </div>
      </div>
    );
  }
}

export default Profile;
