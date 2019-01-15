import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStringOfDigits, formatFromString, getNewSelectionStart } from './Format';

class EditTelForm extends Component {
  static defaultProps = {
    value: '',
  }

  static propTypes = {
    value: PropTypes.string,
    onSave: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.telInput = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value,
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
    this.setState(oldState => ({
      value: getStringOfDigits(formattedTel),
      newSelectionStart: getNewSelectionStart(
        oldState.keyDownSelectionStart,
        selectionStart,
        formattedTel,
      ),
    }),
    () => {
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
