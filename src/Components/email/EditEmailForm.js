import React, { Component } from 'react';

class EditEmailForm extends Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value || '',
    };
  }

  componentDidMount() {
    this.emailInput.current.focus();
    this.emailInput.current.select();
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  onKeyDown = ({ keyCode }) => {
    const { value } = this.state;
    const { onSave } = this.props;
    if (keyCode === 13) onSave('email', value);
    if (keyCode === 27) onSave('email', this.initValue);
  }

  render() {
    const { value } = this.state;
    const { onSave } = this.props;
    return (
      <p>
        <input
          placeholder="address@gmail.com"
          ref={this.emailInput}
          type="email"
          value={value}
          onChange={this.onChange}
          onBlur={() => onSave('email', value)}
          onKeyDown={this.onKeyDown}
        />
      </p>
    );
  }
}

export default EditEmailForm;
