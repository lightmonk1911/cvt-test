import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';


const wrapper = shallow(<App />);


test('container exist', () => {
  expect(wrapper.find('.container')).toExist();
});
