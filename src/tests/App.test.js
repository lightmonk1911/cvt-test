import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Main from '../Components/Main';
import Navbar from '../Components/Navbar';

const Test = () => <div className="container">Test</div>;

describe('Tests works in common', () => {
  const wrapper = shallow(<Test />);

  it('Test has .container', () => {
    expect(wrapper.contains(<div className="container">Test</div>)).toBe(true);
  });

  it('Test has no class .test', () => {
    expect(wrapper.find('.test')).toHaveLength(0);
  });
});

describe('static App', () => {
  const wrapper = shallow(<App />);

  it('App has class .container', () => {
    expect(wrapper.hasClass('container')).toBe(true);
  });

  it('App state.active is "profile"', () => {
    expect(wrapper.state('active')).toBe('profile');
  });

  it('App has header', () => {
    expect(wrapper.find('header')).toHaveLength(1);
  });

  it('App has Main', () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });

  it('Main "active" prop is profile', () => {
    expect(wrapper.find(Main).prop('active')).toBe('profile');
  });

  it('App has Navbar', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  it('Navbar "active" prop is profile', () => {
    expect(wrapper.find(Navbar).prop('active')).toBe('profile');
  });
});

describe('behavior App', () => {
  const wrapper = shallow(<App />);
  it('should change active', () => {
    wrapper.find(Navbar).prop('changeTab')('friends');
    expect(wrapper.state('active')).toBe('friends');
    expect(wrapper.find(Navbar).prop('active')).toBe('friends');
    expect(wrapper.find(Main).prop('active')).toBe('friends');
  });
});
