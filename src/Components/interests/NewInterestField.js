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

  onKeyDown = ({ keyCode }) => {
    const { value } = this.state;
    const { onSave } = this.props;
    if (keyCode === 13) onSave(value);
    if (keyCode === 27) onSave('');
  }

  render() {
    const { value } = this.state;
    const { onSave } = this.props;
    return (
      <input
        ref={this.textInput}
        placeholder="Эволюционная биология"
        type="text"
        value={value}
        onChange={this.onChange}
        onBlur={() => onSave(value)}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default NewInterestField;
