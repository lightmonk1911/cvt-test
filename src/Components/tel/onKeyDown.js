function onKeyDown({ keyCode, target: { selectionStart } }) {
  this.setState({ keyDownSelectionStart: selectionStart });
  const { value } = this.state;
  if (keyCode === 13) this.save(value);
  if (keyCode === 27) this.cancel();
}

export default onKeyDown;
