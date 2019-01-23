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

  save = (value) => {
    const { onSave } = this.props;
    if (value !== '' && value !== this.initValue) {
      onSave('tel', value);
      return;
    }
    onSave('tel', this.initValue);
  }

  cancel = () => {
    this.save(this.initValue);
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  onBlur = (e) => {
    if (e.relatedTarget && e.relatedTarget.className === 'cancel-btn') return;
    if (e.relatedTarget && e.relatedTarget.className === 'save-btn') return;
    if (e.relatedTarget && e.relatedTarget.tagName === 'INPUT') return;
    const { value } = this.state;
    this.save(value);
  }

  onKeyDown = ({ keyCode, target: { selectionStart } }) => {
    this.setState({ keyDownSelectionStart: selectionStart });
    const { value: stateValue } = this.state;
    if (keyCode === 13) this.save(stateValue);
    if (keyCode === 27) this.cancel();
  }

  render() {
    const { value } = this.state;
    const { save, cancel } = this;
    const formattedTel = formatFromString(value);
    return (
      <form id="edit-tel-form" onSubmit={this.onSubmit}>
        <input
          placeholder="+7 (900) 123-45-67"
          ref={this.telInput}
          type="tel"
          value={formattedTel}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
        />
        <button
          type="button"
          className="save-btn"
          onBlur={this.onBlur}
          onClick={() => save(value)}
        >
          &#10004;
        </button>
        <button
          type="button"
          className="cancel-btn"
          onBlur={this.onBlur}
          onClick={cancel}
        >
          &#10006;
        </button>
      </form>
    );
  }
}

export default EditTelForm;
