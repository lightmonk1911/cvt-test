import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NewInterestField extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  save = (value) => {
    const { onSave } = this.props;
    if (value !== '' && value !== this.initValue) {
      onSave(value);
      return;
    }
    onSave(this.initValue);
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

  onKeyDown = ({ keyCode }) => {
    const { value } = this.state;
    if (keyCode === 13) this.save(value);
    if (keyCode === 27) this.cancel();
  }

  render() {
    const { value } = this.state;
    return (
      <form
        id="new-interest-form"
        onSubmit={this.onSubmit}
      >
        <input
          ref={this.textInput}
          placeholder="Sport"
          type="text"
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
        />
        <button
          type="submit"
          className="save-btn"
          onBlur={this.onBlur}
          onClick={() => save(value)}
        >
          {value ? 'Добавить интерес' : 'Отменить'}
        </button>
      </form>
    );
  }
}

export default NewInterestField;
