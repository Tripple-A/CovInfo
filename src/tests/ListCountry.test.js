import React from 'react';
import { render } from '@testing-library/react';
import ListCountry from '../components/showCountries';
import '@testing-library/jest-dom/extend-expect';

const div = document.createElement('div');
const country = { country: 'France', countryInfo: { iso2: 'FR' } };

it('renders without crashing', () => {
  render(<ListCountry country={country} />, div);
});

it('renders text correctly', () => {
  const { getByTestId } = render(<ListCountry country={country} />, div);
  expect(getByTestId('name')).toHaveTextContent('France');
});
