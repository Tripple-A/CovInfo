import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import renderWithRedux from './SearchBar.test';
import CountryInfo from '../containers/countryInfo/countryInfo';


const div = document.createElement('div');
const match = {
  params: {
    name: 'Albania',
  },
};

it('renders without crashing', () => {
  renderWithRedux(
    <MemoryRouter>
      <CountryInfo match={match} />
    </MemoryRouter>, div,
  );
});

it('renders text correctly', () => {
  const { getByTestId } = renderWithRedux(
    <MemoryRouter>
      <CountryInfo match={match} />
    </MemoryRouter>,
  );
  expect(getByTestId('total')).toHaveTextContent('Total');
});
