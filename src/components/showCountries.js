import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter } from 'react-router-dom';

const ListCountry = ({ country }) => (

  <div>

    <Link to={`/covinfo/${country.country}`}>
      <div className="country">
        <div className="flag">
        <img src={`https://www.countryflags.io/${country.countryInfo.iso2}/flat/64.png`} alt="country-flag" />
        </div>
        <div className="country-name">
          <h3 data-testid="name">{country.country}</h3>
        </div>
      </div>
    </Link>

  </div>
);

ListCountry.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    countryInfo: PropTypes.shape({
      iso2: PropTypes.string,
    }),
  }).isRequired,
};

export default ListCountry;
