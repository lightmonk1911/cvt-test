import React from 'react';
import PropTypes from 'prop-types';

export const SaveBtn = ({ onBlur, save, value }) => (
  <button
    key="save-btn"
    type="button"
    className="save-btn"
    onBlur={onBlur}
    onClick={() => save(value)}
  >
    &#10004;
  </button>
);

SaveBtn.propTypes = {
  onBlur: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export const CancelBtn = ({ onBlur, cancel }) => (
  <button
    key="cancel-btn"
    type="button"
    className="cancel-btn"
    onBlur={onBlur}
    onClick={cancel}
  >
    &#10006;
  </button>
);

CancelBtn.propTypes = {
  onBlur: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export const AddInterestBtn = ({ onBlur, save, value }) => (
  <button
    type="button"
    className="save-btn"
    onBlur={onBlur}
    onClick={() => save(value)}
  >
    {value ? 'Добавить интерес' : 'Отменить'}
  </button>
);

AddInterestBtn.propTypes = {
  onBlur: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
