import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InterestButton from './InterestButton';
import NewInterest from './NewInterest';

class EditableInterests extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired,
    isEditing: PropTypes.bool.isRequired,
    onAddInterest: PropTypes.func.isRequired,
  }

  onAdd = (interestName) => {
    const { onChange, interests: oldInterests } = this.props;
    if (!interestName) {
      onChange(oldInterests);
      return;
    }
    const newInterests = [interestName].concat(oldInterests);
    onChange(newInterests);
  }

  onDelete = (indexOfDeletingInterest) => {
    const { onChange, interests: oldInterests } = this.props;
    const newInterests = oldInterests
      .filter((interestName, index) => index !== indexOfDeletingInterest);
    onChange(newInterests);
  }

  render() {
    const { interests, onAddInterest, isEditing } = this.props;
    return (
      <div id="interests">
        <NewInterest onAddInterest={onAddInterest} onSave={this.onAdd} isEditing={isEditing} />
        {interests.map((interestName, index) => (
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
