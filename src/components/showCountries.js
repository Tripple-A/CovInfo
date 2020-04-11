import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListCountry = ({ country }) => (

  <div>
    <Link to={`/covinfo/${country.country}`}>
      <div>
        <img src={`https://www.countryflags.io/${country.countryInfo.iso2}/flat/64.png`} alt="country-flag" />
        <h3>{country.country}</h3>
      </div>
    </Link>

  </div>
);

ListCountry.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired,
    countryInfo: PropTypes.shape({
      iso2: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ListCountry;
