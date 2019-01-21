import React from 'react';
import PropTypes from 'prop-types';

const Married = ({ onEdit, value, extraEditableFieldsEnabled }) => (
  extraEditableFieldsEnabled
    ? (
      <button type="button" className="editable user-data-line-value link-styled" onClick={() => onEdit('married')}>
        {value ? 'женат/замужем' : 'холост/не замужем'}
      </button>
    )
    : (
      <span className="user-data-line-value">
        холост
      </span>
    )
);

Married.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  extraEditableFieldsEnabled: PropTypes.bool.isRequired,
};

export default Married;
