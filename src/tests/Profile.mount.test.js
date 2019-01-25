import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Profile from '../Components/Profile';
import testEditable from './testEditableTextComponent';
import { formatFromString, getStringOfDigits } from '../Components/tel/Format';

const fakeLocalStorage = {};

beforeAll(() => {
  sinon.stub(localStorage, 'getItem').callsFake(key => fakeLocalStorage[key]);
  sinon.stub(localStorage, 'setItem').callsFake((key, value) => { fakeLocalStorage[key] = value.toString(); });
});

describe('behavior Profile', () => {
  describe('Name', () => {
    const getWrapper = () => mount(<Profile />);
    testEditable({
      localStorage,
      getWrapper,
      initValue: 'Виталя Гора',
      initSelector: '#user-name',
      formSelector: '#edit-name-form',
      fieldName: 'name',
      newValue: 'Илон Маск2',
    });
  });

  describe('Email', () => {
    const getWrapper = () => mount(<Profile />);
    testEditable({
      localStorage,
      getWrapper,
      initValue: 'vitalya@gora.ru',
      initSelector: '#email',
      formSelector: '#edit-email-form',
      fieldName: 'email',
      newValue: 'test@test.ru',
    });
  });

  describe('Tel', () => {
    const getWrapper = () => mount(<Profile />);
    testEditable({
      localStorage,
      getWrapper,
      initValue: '+7 (440) 554-32-12',
      initSelector: '#tel',
      formSelector: '#edit-tel-form',
      fieldName: 'tel',
      newValue: '+79635411220',
      valueHandling: {
        input: formatFromString,
        localStorage: getStringOfDigits,
        state: getStringOfDigits,
      },
    });
  });

  describe('Interests', () => {
    const initList = ['музыка', 'компьютеры', 'радио'];
    let wrapper;
    beforeEach(() => {
      localStorage.setItem('interests', JSON.stringify(initList));
      wrapper = mount(<Profile />);
    });

    afterEach(() => {
      wrapper.unmount();
    });
    describe('user clicks on existing interests', () => {
      test(`should present interest ${initList[0]}`, () => {
        expect(wrapper.find('.interest-button').findWhere(node => node.text() === initList[0])).toHaveLength(1);
      });
      test(`should present interest ${initList[2]}`, () => {
        expect(wrapper.find('.interest-button').findWhere(node => node.text() === initList[2])).toHaveLength(1);
      });
      describe(`user clicks on ${initList[0]}`, () => {
        beforeEach(() => {
          const interestButtons = wrapper.find('.interest-button');
          const first = interestButtons.at(1);
          first.simulate('click');
        });

        test(`interest ${initList[0]} shoud be deleted`, () => {
          expect(wrapper.find('.interest-button').findWhere(node => node.text() === initList[0])).toHaveLength(0);
        });

        describe(`user clicks on ${initList[2]}`, () => {
          beforeEach(() => {
            const interestButtons = wrapper.find('.interest-button');
            const third = interestButtons.at(2);
            third.simulate('click');
          });

          test(`interest ${initList[2]} shoud be deleted`, () => {
            expect(wrapper.find('.interest-button').findWhere(node => node.text() === initList[2])).toHaveLength(0);
          });

          test('state shoud be updated', () => {
            expect(wrapper.state('interests')).toEqual([initList[1]]);
          });
        });
      });
    });

    describe('user clicks on + button', () => {
      const fieldName = 'interests';
      const formSelector = '#new-interest-form';
      const newInterestName = 'Плавание';
      const valueHandling = {
        input: value => value,
        localStorage: (newInterest, oldState = initList) => {
          if (!newInterest) return JSON.stringify(oldState);
          return JSON.stringify([newInterest].concat(oldState));
        },
        state: (newInterest, oldState = initList) => {
          if (!newInterest) return oldState;
          return [newInterest].concat(oldState);
        },
      };

      beforeEach(() => {
        const button = wrapper.find('.interest-button').first();
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
          expect(wrapper.find(`form${formSelector}`)).toHaveLength(0);
        });

        test(`should update state ${fieldName}`, () => {
          expect(wrapper.state(fieldName)).toEqual(valueHandling.state(value));
        });

        test(`should update localStorage ${fieldName}`, () => {
          expect(localStorage.getItem(fieldName)).toBe(valueHandling.localStorage(value));
        });

        test(`${fieldName} changes should be implemented`, () => {
          const newState = valueHandling.state(value);
          newState.forEach((interest) => {
            expect(wrapper
              .find('.interest-button')
              .findWhere(node => node.text() === interest))
              .toHaveLength(1);
            expect(wrapper
              .find('.interest-button'))
              .toHaveLength(newState.length + 1);
          });
        });
      };

      describe('user blur to out of form', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('blur');
        });

        shouldSave('');
      });

      describe('user changes value', () => {
        const value = newInterestName;

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

        describe('user blur to out of form', () => {
          beforeEach(() => {
            wrapper.find('.save-btn').simulate('click');
          });

          shouldSave(value);
        });

        describe('user blur to form element', () => {
          describe('save-btn class', () => {
            beforeEach(() => {
              wrapper.find('input').simulate('blur', {
                relatedTarget: { className: 'save-btn' },
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
  });
});
