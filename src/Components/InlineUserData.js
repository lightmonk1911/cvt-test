import React from 'react';
import PropTypes from 'prop-types';

const InlineUserData = ({ name, value }) => (
  <div className="inline-user-data">
    <span className="user-data-line-name">
      <b>
        {name}
      </b>
    </span>
    {value}
  </div>
);

InlineUserData.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.element.isRequired,
};

export default InlineUserData;
