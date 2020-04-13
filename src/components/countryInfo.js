import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  countries: state.countries,
});

const finder = (name, countries) => {
  const x = countries.find(country => country.country === name);
  return x;
};

const CountryInfo = ({ match, countries }) => {
  const country = finder(match.params.name, countries);

  return (
    <div>
    <div className="country-info">
      <img src={`https://www.countryflags.io/${country.countryInfo.iso2}/flat/64.png`} alt="country-flag" />
      <h1>{country.country}</h1>
    </div>
    <div className="cases">
      <h5>
        Total Cases:
        {country.cases}
      </h5>
      <h5>
        <span className="red">Today&apos;s Cases: </span>
        {country.todayCases}
      </h5>
      </div>
      <div className="cases">
      <h5>
        <span className="red">Total Deaths: </span>
        {country.deaths}
      </h5>
      <h5>
       <span className="red"> Today&apos;s Deaths: </span>
        {country.todayDeaths}
      </h5>
      </div>
      <div className="cases">
      <h5>
       <span className="green"> Cases Recovered: </span>
        {country.recovered}
      </h5>
      <h5>
        Active Cases:
        {country.active}
      </h5>
      </div>
      <div className="cases">
      <h5>
       <span className="red"> Critical Cases: </span>
        {country.critical}
      </h5>
      <h5>
        <span className="green">Tests Carried Out: </span>
        {country.tests}
      </h5>
      </div>
      <Link to="/">
        <div className="cases">
      <button type="button" className="btn btn-primary">Home</button>
      </div> 
       </Link>
       </div>
  );
};

CountryInfo.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default connect(mapStateToProps)(CountryInfo);
