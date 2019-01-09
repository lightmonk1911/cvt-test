import React, { Component } from 'react';

class EditNameForm extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value || '',
    };
  }

  componentDidMount() {
    this.textInput.current.focus();
    this.textInput.current.select();
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  onKeyDown = ({ keyCode }) => {
    const { value } = this.state;
    const { onSave } = this.props;
    if (keyCode === 13) onSave('name', value);
    if (keyCode === 27) onSave('name', this.initValue);
  }

  render() {
    const { value } = this.state;
    const { onSave } = this.props;
    return (
      <h1>
        <input
          ref={this.textInput}
          type="text"
          value={value}
          onChange={this.onChange}
          onBlur={() => onSave('name', value)}
          onKeyDown={this.onKeyDown}
        />
      </h1>
    );
  }
}

export default EditNameForm;