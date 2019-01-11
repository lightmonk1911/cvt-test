import React, { Component } from 'react';
import InterestButton from './InterestButton';

class EditableInterests extends Component {
  onAdd = (interestName) => {
    const { onChange, interests: oldInterests } = this.props;
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
    const { interests } = this.props;
    return (
      <div id="interests">
        {interests.map((interestName, index) => (
          <InterestButton
            key={`${index}-${interestName}`}
            name={interestName}
            onClick={() => this.onDelete(index)}
          />
        ))}
      </div>
    );
  }
}

export default EditableInterests;
