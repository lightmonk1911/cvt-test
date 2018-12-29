import React, { Component } from 'react';

class EditMarriedForm extends Component {
  constructor(props) {
    super(props);
    this.selectMarried = React.createRef();
    this.initValue = props.value;
    this.state = {
      value: props.value || '',
    };
  }

  componentDidMount() {
    this.selectMarried.current.focus();
  }

  onSave = ({ target: { value } }) => {
    const { onSave } = this.props;
    onSave('married', value);
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  onKeyDown = ({ keyCode }) => {
    const { value } = this.state;
    const { onSave } = this.props;
    if (keyCode === 13) onSave('married', value);
    if (keyCode === 27) onSave('married', this.initValue);
  }

  render() {
    const { value } = this.state;
    const { onSave } = this.props;
    return (
      <select
        size={2}
        ref={this.selectMarried}
        value={value}
        onChange={this.onChange}
        onClick={this.onSave}
        onBlur={this.onSave}
        onKeyDown={this.onKeyDown}
      >
        <option value="true">женат/замужем</option>
        <option value="false">холост/не замужем</option>
      </select>
    );
  }
}

export default EditMarriedForm;
