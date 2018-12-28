import React, { Component } from 'react';
import Cat from '../images/cat.png';

class Profile extends Component {
  state = {
    name: localStorage.getItem('name') || 'Виталя Гора',
    city: localStorage.getItem('city') || 'Нижние Шахты',
    married: localStorage.getItem('married') || 'Холост',
    tel: localStorage.getItem('tel') || '+7 (440) 554-32-12',
    email: localStorage.getItem('email') || 'vitalya@gora.ru',
    interests: localStorage.getItem('interests') || JSON.stringify(['Музыка', 'Компьютеры', 'Радио']),
  }

  render() {
    return (
      <div className="row">
        <div className="col-4 avatar">
          <img src={Cat} alt="Cat" />
          <button
            type="button"
          >
            Добавить в друзья
          </button>
        </div>
        <div className="col-8 user-data">
          <h1>Виталя Гора</h1>
          <small>г. Нижние Шахты</small>
          <div className="row">
            <div className="col-6">
              <p><b>Семейное положение</b></p>
              <p><b>Телефон</b></p>
              <p><b>E-mail</b></p>
            </div>
            <div className="col-6">
              <p>Холост</p>
              <p>+7 (440) 554-32-12</p>
              <p>vitalya@gora.ru</p>
            </div>
          </div>
          <p><b>Интересы</b></p>
          <div id="interests">
            <button
              type="button"
            >
              Музыка
            </button>
            <button
              type="button"
            >
              Компьютеры
            </button>
            <button
              type="button"
            >
              Радио
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
