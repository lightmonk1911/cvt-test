import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Profile from '../Components/Profile';
import EditableName from '../Components/name/EditableName';
import Cat from '../images/cat.png';
import EditableTel from '../Components/tel/EditableTel';
import EditableEmail from '../Components/email/EditableEmail';
import EditableInterests from '../Components/interests/EditableInterests';

const fakeLocalStorage = {};

beforeAll(() => {
  sinon.stub(localStorage, 'getItem').callsFake(key => fakeLocalStorage[key]);
  sinon.stub(localStorage, 'setItem').callsFake((key, value) => { fakeLocalStorage[key] = value.toString(); });
});

describe('should have init state', () => {
  test('name', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('name')).toBe('Виталя Гора');
  });

  test('tel', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('tel')).toBe('74405543212');
  });

  test('email', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('email')).toBe('vitalya@gora.ru');
  });

  test('interests', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('interests')).toEqual(['музыка', 'компьютеры', 'радио']);
  });

  test('editingField', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('editingField')).toBe('');
  });
});

describe('static Profile', () => {
  const wrapper = shallow(<Profile />);
  test('avatar section', () => {
    expect(wrapper.contains(
      <div className="avatar-section">
        <img id="avatar" src={Cat} alt="Cat" />
        <button type="button" id="add-to-freinds-btn">Добавить в друзья</button>
      </div>,
    )).toBe(true);
  });

  test('header', () => {
    expect(wrapper.find('div.main.profile > div.user-data > header')).toHaveLength(1);
    expect(wrapper.find('header').find(EditableName)).toHaveLength(1);
  });

  test('user-data section', () => {
    expect(wrapper.find('div.lined-user-data-section > div.inline-user-data > span.user-data-line-name')).toHaveLength(3);
    expect(wrapper.find('.inline-user-data').find(EditableTel)).toHaveLength(1);
    expect(wrapper.find('.inline-user-data').find(EditableEmail)).toHaveLength(1);
  });

  test('interests section', () => {
    expect(wrapper.find('div.main.profile > div.user-data > div.interests-section').find(EditableInterests)).toHaveLength(1);
  });
});

describe('behavior Profile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Profile />);
  });
  describe('user clicks on Name', () => {
    beforeEach(() => {
      const nameButton = wrapper.find('#user-name');
      nameButton.simulate('click');
    });
    test('should update state editingField', () => {
      expect(wrapper.state('editingField')).toBe('name');
    });
    test('name form should appear', () => {
      expect(wrapper.containsMatchingElement(
        <h2>
          <form>
            <input
              type="text"
              value="Виталя Гора"
            />
            <button
              type="button"
              className="save-btn"
            >
              &#10004;
            </button>
            <button
              type="button"
              className="cancel-btn"
            >
              &#10006;
            </button>
          </form>
        </h2>,
      )).toBe(true);
    });

    describe('user blur to out of form', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('blur');
      });

      test('should update state editing field', () => {
        expect(wrapper.state('editingField')).toBe('');
      });

      test('name form should disappear', () => {
        expect(wrapper.find('form')).toHaveLength(0);
      });

      test('Name btn should appear', () => {
        expect(wrapper.containsMatchingElement(
          <h2>
            <button
              id="user-name"
              type="button"
              className="editable link-styled"
            >
              Виталя Гора
            </button>
          </h2>,
        )).toBe(true);
      });
    });

    describe('user changes name', () => {
      const name = 'Илон Маск';
      beforeEach(() => {
        wrapper.find('input').simulate('change', {
          target: { value: name },
        });
      });

      test('should update input value', () => {
        expect(wrapper.find('input').prop('value')).toBe(name);
      });

      describe('user blur to out of form', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('blur');
        });

        test('should update state editing field', () => {
          expect(wrapper.state('editingField')).toBe('');
        });

        test('should update state name', () => {
          expect(wrapper.state('name')).toBe(name);
        });

        test('should update localStorage name', () => {
          expect(localStorage.getItem('name')).toBe(name);
        });

        test('name form should disappear', () => {
          expect(wrapper.find('form')).toHaveLength(0);
        });

        test('Name btn should appear', () => {
          expect(wrapper.containsMatchingElement(
            <h2>
              <button
                id="user-name"
                type="button"
                className="editable link-styled"
              >
                {name}
              </button>
            </h2>,
          )).toBe(true);
        });
      });

      describe('user blur to form element', () => {
        describe('save-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'save-btn' },
            });
          });

          test('editingField should be name', () => {
            expect(wrapper.state('editingField')).toBe('name');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-name-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(name);
          });
        });

        describe('cancel-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'cancel-btn' },
            });
          });

          test('editingField should be name', () => {
            expect(wrapper.state('editingField')).toBe('name');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-name-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(name);
          });
        });

        describe('cancel-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { tagName: 'INPUT' },
            });
          });

          test('editingField should be name', () => {
            expect(wrapper.state('editingField')).toBe('name');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-name-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(name);
          });
        });
      });
    });
  });


  describe('user clicks on Email', () => {
    beforeEach(() => {
      const emailButton = wrapper.find('#email');
      emailButton.simulate('click');
    });
    test('should update state editingField', () => {
      expect(wrapper.state('editingField')).toBe('email');
    });
    test('email form should appear', () => {
      expect(wrapper.containsMatchingElement(
        <form id="edit-email-form">
          <input
            type="email"
            value="vitalya@gora.ru"
          />
          <button
            type="button"
            className="save-btn"
          >
            &#10004;
          </button>
          <button
            type="button"
            className="cancel-btn"
          >
            &#10006;
          </button>
        </form>,
      )).toBe(true);
    });

    describe('user blur to out of form', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('blur');
      });

      test('should update state editing field', () => {
        expect(wrapper.state('editingField')).toBe('');
      });

      test('email form should disappear', () => {
        expect(wrapper.find('form')).toHaveLength(0);
      });

      test('Email btn should appear', () => {
        expect(wrapper.containsMatchingElement(
          <button
            id="email"
            type="button"
            className="editable link-styled"
          >
            vitalya@gora.ru
          </button>,
        )).toBe(true);
      });
    });

    describe('user changes email', () => {
      const email = 'slice@atom.ru';
      beforeEach(() => {
        wrapper.find('input').simulate('change', {
          target: { value: email },
        });
      });

      test('should update input value', () => {
        expect(wrapper.find('input').prop('value')).toBe(email);
      });

      describe('user blur to out of form', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('blur');
        });

        test('should update state editing field', () => {
          expect(wrapper.state('editingField')).toBe('');
        });

        test('should update state email', () => {
          expect(wrapper.state('email')).toBe(email);
        });

        test('should update localStorage email', () => {
          expect(localStorage.getItem('email')).toBe(email);
        });

        test('email form should disappear', () => {
          expect(wrapper.find('form')).toHaveLength(0);
        });

        test('Name btn should appear', () => {
          expect(wrapper.containsMatchingElement(
            <button
              id="email"
              type="button"
              className="editable link-styled"
            >
              {email}
            </button>,
          )).toBe(true);
        });
      });

      describe('user blur to form element', () => {
        describe('save-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'save-btn' },
            });
          });

          test('editingField should be email', () => {
            expect(wrapper.state('editingField')).toBe('email');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-email-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(email);
          });
        });

        describe('cancel-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'cancel-btn' },
            });
          });

          test('editingField should be email', () => {
            expect(wrapper.state('editingField')).toBe('email');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-email-form')).toHaveLength(1);
          });

          test('should not update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(email);
          });
        });

        describe('cancel-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { tagName: 'INPUT' },
            });
          });

          test('editingField should be email', () => {
            expect(wrapper.state('editingField')).toBe('email');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-email-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(email);
          });
        });
      });
    });
  });

  describe('user clicks on Tel', () => {
    beforeEach(() => {
      const telButton = wrapper.find('#tel');
      telButton.simulate('click');
    });
    test('should update state editingField', () => {
      expect(wrapper.state('editingField')).toBe('tel');
    });
    test('tel form should appear', () => {
      expect(wrapper.containsMatchingElement(
        <form id="edit-tel-form">
          <input
            placeholder="+7 (900) 123-45-67"
            type="tel"
            value="+7 (440) 554-32-12"
          />
          <button
            type="button"
            className="save-btn"
          >
            &#10004;
          </button>
          <button
            type="button"
            className="cancel-btn"
          >
            &#10006;
          </button>
        </form>,
      )).toBe(true);
    });

    describe('user blur to out of form', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('blur');
      });

      test('should update state editing field', () => {
        expect(wrapper.state('editingField')).toBe('');
      });

      test('tel form should disappear', () => {
        expect(wrapper.find('form')).toHaveLength(0);
      });

      test('tel btn should appear', () => {
        expect(wrapper.containsMatchingElement(
          <button
            id="tel"
            type="button"
            className="editable link-styled"
          >
            +7 (440) 554-32-12
          </button>,
        )).toBe(true);
      });
    });

    describe('user changes tel', () => {
      const tel = '71234567890';
      const formattedTel = '+7 (123) 456-78-90';
      beforeEach(() => {
        wrapper.find('input').simulate('change', {
          target: { value: tel },
        });
      });

      test('should update input value', () => {
        expect(wrapper.find('input').prop('value')).toBe(formattedTel);
      });

      describe('user blur to out of form', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('blur');
        });

        test('should update state editing field', () => {
          expect(wrapper.state('editingField')).toBe('');
        });

        test('should update state tel', () => {
          expect(wrapper.state('tel')).toBe(tel);
        });

        test('should update localStorage tel', () => {
          expect(localStorage.getItem('tel')).toBe(tel);
        });

        test('tel form should disappear', () => {
          expect(wrapper.find('form')).toHaveLength(0);
        });

        test('Name btn should appear', () => {
          expect(wrapper.containsMatchingElement(
            <button
              id="tel"
              type="button"
              className="editable link-styled"
            >
              +7 (123) 456-78-90
            </button>,
          )).toBe(true);
        });
      });

      describe('user blur to form element', () => {
        describe('save-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'save-btn' },
            });
          });

          test('editingField should be tel', () => {
            expect(wrapper.state('editingField')).toBe('tel');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-tel-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(formattedTel);
          });
        });

        describe('cancel-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'cancel-btn' },
            });
          });

          test('editingField should be tel', () => {
            expect(wrapper.state('editingField')).toBe('tel');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-tel-form')).toHaveLength(1);
          });

          test('should not update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(formattedTel);
          });
        });

        describe('cancel-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { tagName: 'INPUT' },
            });
          });

          test('editingField should be tel', () => {
            expect(wrapper.state('editingField')).toBe('tel');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#edit-tel-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(formattedTel);
          });
        });
      });
    });
  });

  describe('user clicks on existing interests', () => {
    beforeEach(() => {
      const interestButtons = wrapper.find('.interest-button');
      const first = interestButtons.at(1);
      const third = interestButtons.at(3);
      first.simulate('click');
      third.simulate('click');
    });
    test('should have two interests', () => {
      expect(wrapper.state('interests')).toHaveLength(1);
    });
  });

  describe('user clicks on + button', () => {
    beforeEach(() => {
      wrapper.find('.interest-button').first().simulate('click');
    });

    test('should update state editingField', () => {
      expect(wrapper.state('editingField')).toBe('interest');
    });

    test('should new interest form appear', () => {
      expect(wrapper.containsMatchingElement(
        <form
          id="new-interest-form"
        >
          <input
            placeholder="Sport"
            type="text"
            value=""
          />
          <button
            type="submit"
            className="save-btn"
          >
            Отменить
          </button>
        </form>,
      )).toBe(true);
    });

    describe('user changes new interest input value', () => {
      const interest = 'Swimming';
      const newInterests = [interest, 'компьютеры'];
      beforeEach(() => {
        wrapper.find('input').simulate('change', {
          target: { value: interest },
        });
      });

      test('should update input value', () => {
        expect(wrapper.find('input').prop('value')).toBe(interest);
      });

      describe('user click save-btn', () => {
        beforeEach(() => {
          wrapper.find('.save-btn').simulate('click');
        });

        afterEach(() => {
          wrapper.find('.interest-button').at(1).simulate('click');
        });

        test('should update state editing field', () => {
          expect(wrapper.state('editingField')).toBe('');
        });

        test('should update state interests', () => {
          expect(wrapper.state('interests')).toEqual(newInterests);
        });

        test('should update localStorage interests', () => {
          expect(localStorage.getItem('interests')).toBe(JSON.stringify(newInterests));
        });

        test('new interest form should disappear', () => {
          expect(wrapper.find('form')).toHaveLength(0);
        });

        test('interest btn should appear', () => {
          expect(wrapper.containsMatchingElement(
            <button
              className="interest-button"
              type="button"
              title={`Удалить интерес "${interest}"`}
            >
              {interest}
            </button>,
          )).toBe(true);

          expect(wrapper.containsMatchingElement(
            <button
              className="interest-button"
              type="button"
              title={'Удалить интерес "компьютеры"'}
            >
              компьютеры
            </button>,
          )).toBe(true);
        });
      });

      describe('user blur to out of form', () => {
        beforeEach(() => {
          wrapper.find('input').simulate('blur');
        });

        afterEach(() => {
          wrapper.find('.interest-button').at(1).simulate('click');
        });

        test('should update state editing field', () => {
          expect(wrapper.state('editingField')).toBe('');
        });

        test('should update state interests', () => {
          expect(wrapper.state('interests')).toEqual(newInterests);
        });

        test('should update localStorage interests', () => {
          expect(localStorage.getItem('interests')).toBe(JSON.stringify(newInterests));
        });

        test('new interest form should disappear', () => {
          expect(wrapper.find('form')).toHaveLength(0);
        });

        test('interest btn should appear', () => {
          expect(wrapper.containsMatchingElement(
            <button
              className="interest-button"
              type="button"
              title={`Удалить интерес "${interest}"`}
            >
              {interest}
            </button>,
          )).toBe(true);

          expect(wrapper.containsMatchingElement(
            <button
              className="interest-button"
              type="button"
              title={'Удалить интерес "компьютеры"'}
            >
              компьютеры
            </button>,
          )).toBe(true);
        });
      });

      describe('user blur to form element', () => {
        describe('blur to save-btn class', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { className: 'save-btn' },
            });
          });

          test('editingField should be interest', () => {
            expect(wrapper.state('editingField')).toBe('interest');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#new-interest-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(interest);
          });
        });

        describe('blur to INPUT', () => {
          beforeEach(() => {
            wrapper.find('input').simulate('blur', {
              relatedTarget: { tagName: 'INPUT' },
            });
          });

          test('editingField should be interest', () => {
            expect(wrapper.state('editingField')).toBe('interest');
          });

          test('editingField should not be changed', () => {
            expect(wrapper.find('#new-interest-form')).toHaveLength(1);
          });

          test('should not change update input value', () => {
            expect(wrapper.find('input').prop('value')).toBe(interest);
          });
        });
      });
    });
  });
});
