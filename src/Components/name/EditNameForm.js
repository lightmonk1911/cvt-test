import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditNameForm extends Component {
  static defaultProps = {
    value: '',
  }

  static propTypes = {
    value: PropTypes.string,
    onSave: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value,
    };
  }

  componentDidMount() {
    this.textInput.current.focus();
    this.textInput.current.select();
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  save = (value) => {
    const { onSave } = this.props;
    if (value !== '' && value !== this.initValue) {
      onSave('name', value);
      return;
    }
    onSave('name', this.initValue);
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
    const { save, cancel } = this;
    return (
      <h2>
        <form id="edit-name-form" onSubmit={this.onSubmit}>
          <input
            ref={this.textInput}
            type="text"
            value={value}
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
      </h2>
    );
  }
}

export default EditNameForm;
