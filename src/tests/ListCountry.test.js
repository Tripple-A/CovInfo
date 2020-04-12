import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ListCountry from '../components/showCountries';


const div = document.createElement('div');
const country = { country: 'France', countryInfo: { iso2: 'FR' } };

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <ListCountry country={country} />
    </MemoryRouter>, div,
  );
});

it('renders text correctly', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <ListCountry country={country} />
    </MemoryRouter>, div,
  );
  expect(getByTestId('name')).toHaveTextContent('France');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <ListCountry country={country} />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
