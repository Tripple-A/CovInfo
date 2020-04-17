import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/header';


const div = document.createElement('div');
const style = { display: 'block' };
const change = () => {
  if (style.display === 'block') {
    style.display = 'none';
  } else {
    style.display = 'block';
  }
};
const total = {
  updated: 1587123700636,
  cases: 2197161,
  todayCases: 15853,
  deaths: 147512,
  todayDeaths: 2041,
  recovered: 557617,
  active: 1492032,
  critical: 56517,
  casesPerOneMillion: 282,
  deathsPerOneMillion: 18,
  tests: 18507025,
  testsPerOneMillion: 2375.3,
  affectedCountries: 212,
};

it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <Header total={total} style={style} change={change} />
    </MemoryRouter>, div,
  );
});

it('renders text correctly', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Header total={total} style={style} change={change} />
    </MemoryRouter>, div,
  );
  expect(getByTestId('cov')).toHaveTextContent('Cov:');
});

it('matches snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Header total={total} style={style} change={change} />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
