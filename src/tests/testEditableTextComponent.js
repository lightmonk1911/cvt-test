const testEditable = ({
  localStorage,
  getWrapper,
  initValue,
  initSelector,
  formSelector,
  fieldName,
  newValue,
  valueHandling = {
    input: value => value,
    localStorage: value => value,
    state: value => value,
  },
}) => {
  describe(`user clicks on ${fieldName} btn`, () => {
    let wrapper;
    beforeEach(() => {
      wrapper = getWrapper();
      const button = wrapper.find(`${initSelector}`);
      button.simulate('click');
    });

    test('should update state editingField', () => {
      expect(wrapper.state('editingField')).toBe(fieldName);
    });

    test(`${fieldName} form should appear`, () => {
      expect(wrapper.find(`form${formSelector}`)).toHaveLength(1);
    });

    const shouldSave = (value) => {
      test('should update state editing field', () => {
        expect(wrapper.state('editingField')).toBe('');
      });

      test(`${fieldName} form should disappear`, () => {
        expect(wrapper.find('form')).toHaveLength(0);
      });

      test(`should update state ${fieldName}`, () => {
        expect(wrapper.state(fieldName)).toBe(valueHandling.state(value));
      });

      test(`should update localStorage ${fieldName}`, () => {
        expect(localStorage.getItem(fieldName)).toBe(valueHandling.localStorage(value));
      });

      test(`${fieldName} btn should appear`, () => {
        const button = wrapper.find(`button${initSelector}`);
        expect(button).toHaveLength(1);
        expect(button.text()).toBe(valueHandling.input(value));
      });
    };

    describe('user blur to out of form', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('blur');
      });

      shouldSave(initValue);
    });

    describe('user clicks on save-btn', () => {
      beforeEach(() => {
        wrapper.find('.save-btn').simulate('click');
      });

      shouldSave(initValue);
    });

    describe('user changes value', () => {
      const value = newValue;
      beforeEach(() => {
        wrapper.find('input').simulate('change', {
          target: { value },
        });
      });

      test('should update input value', () => {
        expect(wrapper.find('input').prop('value')).toBe(valueHandling.input(value));
      });

      describe('user blur to out of form', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('blur');
        });

        shouldSave(value);
      });

      describe('user clicks on save-btn', () => {
        beforeEach(() => {
          wrapper.find('.save-btn').simulate('click');
        });

        shouldSave(value);
      });

      describe('user blur to form element', () => {
        const shouldNotSave = () => {
          test(`editingField should be ${fieldName}`, () => {
            expect(wrapper.state('editingField')).toBe(fieldName);
          });

          test('form should present', () => {
            expect(wrapper.find('form')).toHaveLength(1);
          });

          test('should not change input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(valueHandling.input(value));
          });
        };

        describe('save-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'save-btn' },
            });
          });

          shouldNotSave();
        });

        describe('cancel-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'cancel-btn' },
            });
          });

          shouldNotSave();
        });

        describe('INPUT', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { tagName: 'INPUT' },
            });
          });

          shouldNotSave();
        });
      });
    });
  });
};

export default testEditable;
