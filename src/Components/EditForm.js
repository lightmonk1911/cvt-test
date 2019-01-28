import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditForm extends Component {
  static defaultProps = {
    value: '',
    type: 'text',
    formatValue: value => value,
    onChange: null,
    onKeyDown: null,
    isInterests: false,
  }

  static propTypes = {
    value: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    fieldName: PropTypes.string.isRequired,
    formatValue: PropTypes.func,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    isInterests: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value,
    };
    const { onChange, onKeyDown } = this.props;
    if (onChange) this.onChange = onChange.bind(this);
    if (onKeyDown) this.onKeyDown = onKeyDown.bind(this);
  }

  componentDidMount() {
    this.input.current.focus();
    this.input.current.select();
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  save = (value) => {
    const { onSave, fieldName } = this.props;
    if (value !== '' && value !== this.initValue) {
      onSave(fieldName, value);
      return;
    }
    onSave(fieldName, this.initValue);
  }

  cancel = () => {
    this.save(this.initValue);
  }

  onKeyDown = ({ keyCode }) => {
    const { value } = this.state;
    if (keyCode === 13) this.save(value);
    if (keyCode === 27) this.cancel();
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

  render() {
    const { value } = this.state;
    const {
      id, type, placeholder, formatValue, isInterests,
    } = this.props;
    const {
      save, cancel, onBlur, onChange, onKeyDown,
    } = this;
    const formattedTel = formatValue(value);
    return (
      <form id={id} onSubmit={this.onSubmit}>
        <input
          placeholder={placeholder}
          ref={this.input}
          type={type}
          value={formattedTel}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
        {!isInterests
          ? [
            <button
              type="button"
              className="save-btn"
              onBlur={onBlur}
              onClick={() => save(value)}
            >
              &#10004;
            </button>,
            <button
              type="button"
              className="cancel-btn"
              onBlur={onBlur}
              onClick={cancel}
            >
              &#10006;
            </button>,
          ]
          : (
            <button
              type="submit"
              className="save-btn"
              onBlur={this.onBlur}
              onClick={() => save(value)}
            >
              {value ? 'Добавить интерес' : 'Отменить'}
            </button>
          )}
      </form>
    );
  }
}

export default EditForm;
