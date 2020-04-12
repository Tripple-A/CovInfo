import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SearchBar from '../components/searchBar';
import rootReducer from '../reducers';

afterEach(cleanup);
const div = document.createElement('div');
const store = createStore(rootReducer);

const renderWithRedux = component => ({
  ...render(<Provider store={store}>{component}</Provider>),
});


it('renders with redux', () => {
  renderWithRedux(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>, div,
  );
});

it('takes the input value of state', () => {
  const { getByTestId } = renderWithRedux(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>, div,
  );
  expect(getByTestId('input').value).toBe('');
});
