import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import CountryInfo from '../components/countryInfo';


const div = document.createElement('div');
const match = {
  params: {
    name: 'Albania',
  },
};

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <CountryInfo match={match} />
    </MemoryRouter>, div,
  );
});

it('renders text correctly', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <CountryInfo match={match} />
    </MemoryRouter>, div,
  );
  expect(getByTestId('total')).toHaveTextContent('Total');
});

it('matches snapshot 1', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <CountryInfo match={match} />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
