import React from 'react';
import PropTypes from 'prop-types';

const City = ({ onEdit, value, extraEditableFieldsEnabled }) => (
  extraEditableFieldsEnabled
    ? (
      <button
        id="city"
        type="button"
        className="editable link-styled"
        onClick={() => onEdit('city')}
      >
        <small>
          {`г. ${value}`}
        </small>
      </button>
    )
    : (
      <span id="city">
        <small>
          г. Нижние Шахты
        </small>
      </span>
    )
);

City.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  extraEditableFieldsEnabled: PropTypes.bool.isRequired,
};

export default City;
