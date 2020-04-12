import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ListCountry from '../components/showCountries';


const div = document.createElement('div');
const country = { country: 'France', countryInfo: { iso2: 'FR' } };

it('renders without crashing', () => {
  render(<ListCountry country={country} />, div);
});

it('renders text correctly', () => {
  const { getByTestId } = render(<ListCountry country={country} />, div);
  expect(getByTestId('name')).toHaveTextContent('France');
});

it('matches snapshot', () => {
  const tree = renderer.create(<ListCountry country={country} />).toJSON();
  expect(tree).toMatchSnapshot();
});
