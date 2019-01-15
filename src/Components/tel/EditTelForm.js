import React, { Component } from 'react';
import isNumber from 'is-number';
import { getStringOfDigits, formatFromString } from './Format';

class EditTelForm extends Component {
  constructor(props) {
    super(props);
    this.telInput = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value || '',
      keyDownSelectionStart: 0,
      newSelectionStart: 0,
    };
  }

  componentDidMount() {
    this.telInput.current.focus();
    this.telInput.current.select();
  }

  onChange = ({ target: { value, selectionStart } }) => {
    const formattedTel = formatFromString(value);
    this.setState((oldState) => {
      const shift = selectionStart - oldState.keyDownSelectionStart;
      let newSelectionStart;
      if (shift > 0) {
        newSelectionStart = Array.from(formattedTel)
          .findIndex((_sign, index) => isNumber(formattedTel[index - 1])
            && (index >= selectionStart));
      } else if (shift === 0) {
        newSelectionStart = selectionStart;
      } else {
        const indexFromRight = Array.from(formattedTel)
          .reverse()
          .findIndex((_sign, index, array) => isNumber(array[index])
            && (index >= array.length - selectionStart));
        const index = formattedTel.length - indexFromRight;
        newSelectionStart = index;
      }
      return { value: getStringOfDigits(formattedTel), newSelectionStart };
    }, () => {
      const { newSelectionStart } = this.state;
      this.telInput.current.setSelectionRange(newSelectionStart, newSelectionStart);
    });
  }

  onKeyDown = ({ keyCode, target: { selectionStart } }) => {
    this.setState({ keyDownSelectionStart: selectionStart });
    const { value: stateValue } = this.state;
    const { onSave } = this.props;
    if (keyCode === 13) onSave('tel', stateValue);
    if (keyCode === 27) onSave('tel', this.initValue);
  }

  render() {
    const { value } = this.state;
    const { onSave } = this.props;
    const formattedTel = formatFromString(value);
    return (
      <p>
        <input
          placeholder="+7-(900)-123-45-67"
          ref={this.telInput}
          type="tel"
          value={formattedTel}
          onChange={this.onChange}
          onBlur={() => onSave('tel', value)}
          onKeyDown={this.onKeyDown}
        />
      </p>
    );
  }
}

export default EditTelForm;
