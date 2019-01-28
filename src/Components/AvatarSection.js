import React from 'react';
import Cat from '../images/cat.png';

const AvatarSection = () => (
  <div className="avatar-section">
    <img id="avatar" src={Cat} alt="Cat" />
    <button type="button" id="add-to-freinds-btn">Добавить в друзья</button>
  </div>
);

export default AvatarSection;
