import React, { Component } from 'react';
import InterestButton from './InterestButton';
import NewInterest from './NewInterest';

class EditableInterests extends Component {
  onAdd = (interestName) => {
    const { onChange, interests: oldInterests } = this.props;
    if (!interestName) {
      onChange(oldInterests);
      return;
    }
    const newInterests = oldInterests.concat(interestName);
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
        {interests.map((interestName, index) => (
          <InterestButton
            key={`${interestName}`}
            name={interestName}
            onClick={() => this.onDelete(index)}
          />
        ))}
        <NewInterest onAddInterest={onAddInterest} onSave={this.onAdd} isEditing={isEditing} />
      </div>
    );
  }
}

export default EditableInterests;
