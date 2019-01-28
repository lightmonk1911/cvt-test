import { getStringOfDigits, formatFromString, getNewSelectionStart } from './Format';

function onChange({ target: { value, selectionStart } }) {
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
    this.input.current.setSelectionRange(newSelectionStart, newSelectionStart);
  });
}

export default onChange;
