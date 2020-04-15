import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListCountry = ({ country }) => (

  <div>

    <Link to={`/covinfo/${country.country}`}>
      <div className="country">
        <div className="flag">
          <img src={country.countryInfo.flag} alt="country-flag" />
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
      flag: PropTypes.string,
    }),
  }).isRequired,
};

export default ListCountry;
