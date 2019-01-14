import React, { Component } from 'react';
import isNumber from 'is-number';
import format from './format';

class EditTelForm extends Component {
  constructor(props) {
    super(props);
    this.telInput = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value || '',
    };
  }

  componentDidMount() {
    this.telInput.current.focus();
    this.telInput.current.select();
  }

  onChange = ({ target: { value } }) => {
    const formattedTel = format(value);
    this.setState({ value: formattedTel });
  }

  onKeyDown = ({ keyCode }) => {
    const { value: stateValue } = this.state;
    const { onSave } = this.props;
    if (keyCode === 13) onSave('tel', stateValue);
    if (keyCode === 27) onSave('tel', this.initValue);
  }

  render() {
    const { value } = this.state;
    const { onSave } = this.props;
    return (
      <p>
        <input
          placeholder="+7-(900)-123-45-67"
          ref={this.telInput}
          type="tel"
          value={value}
          onChange={this.onChange}
          onBlur={() => onSave('tel', value)}
          onKeyDown={this.onKeyDown}
        />
      </p>
    );
  }
}

export default EditTelForm;
