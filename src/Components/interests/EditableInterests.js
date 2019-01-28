import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InterestButton from './InterestButton';
import NewInterest from './NewInterest';

class EditableInterests extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    isEditing: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
  }

  onAdd = (interestName) => {
    const { onChange, value: oldInterests } = this.props;
    if (!interestName) {
      onChange('interests', oldInterests);
      return;
    }
    const newInterests = [interestName].concat(oldInterests);
    onChange('interests', newInterests);
  }

  onDelete = (indexOfDeletingInterest) => {
    const { onChange, value: oldInterests } = this.props;
    const newInterests = oldInterests
      .filter((interestName, index) => index !== indexOfDeletingInterest);
    onChange('interests', newInterests);
  }

  render() {
    const { value, onEdit, isEditing } = this.props;
    return (
      <div id="interests">
        <NewInterest onAddInterest={() => onEdit('interests')} onSave={this.onAdd} isEditing={isEditing} />
        {value.map((interestName, index) => (
          <InterestButton
            key={`${interestName}`}
            name={interestName}
            onClick={() => this.onDelete(index)}
          />
        ))}
      </div>
    );
  }
}

export default EditableInterests;
