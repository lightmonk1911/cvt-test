import './style.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';


render(<App />, document.getElementById('root'));

// delete extra divs from free hosting
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('body>div:not(#root)').forEach(element => element.remove());
});
