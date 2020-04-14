import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import renderWithRedux from './SearchBar.test';

test('renders header', () => {
  const { getByText } = renderWithRedux(<App />);
  const linkElement = getByText(/Get the latest Covid-19 stats here/i);
  expect(linkElement).toBeInTheDocument();
});
