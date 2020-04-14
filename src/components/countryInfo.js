import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from '../styles/cases.module.css';
import track from '../apis';


const mapStateToProps = state => ({
  countries: state.countries,
});


const CountryInfo = ({match}) => {
  const [country, setCountry] = useState({});
  useEffect(() => {
    async function fetchData() {
      await track.countries(match.params.name)
        .then(resp => setCountry(resp));
    }
    fetchData();
  }, [match]);
  console.log(country.countryInfo);
  return (
    <div>
      {country.country}
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
