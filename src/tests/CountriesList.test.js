import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountriesList from '../containers/countriesList';
import renderWithRedux from './SearchBar.test';


afterEach(cleanup);
const div = document.createElement('div');


it('renders with redux', () => {
  renderWithRedux(
    <CountriesList />, div,
  );
});
