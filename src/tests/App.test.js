import React from 'react';
import App from '../components/App';
import renderWithRedux from './SearchBar.test';

test('renders header', () => {
  renderWithRedux(<App />);
});
