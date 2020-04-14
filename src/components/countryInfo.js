import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/cases.module.css';
import track from '../apis';


const CountryInfo = ({ match }) => {
  const [country, setCountry] = useState({});
  useEffect(() => {
    async function fetchData() {
      await track.countries(match.params.name)
        .then(resp => setCountry(resp));
    }
    fetchData();
  }, [match]);

  return (
    <div>
      <h1 className={style.h1}>{country.country}</h1>
      <div className={style.cases}>
        <div className={style.first}>
          <h5 data-testid="total">
            Total Cases:
            {country.cases}
          </h5>
          <h5>
            <span className={style.red}>Total Deaths: </span>
            {country.deaths}
          </h5>
          <h5>
            <span className={style.red}>`Today&apos;s` Cases:</span>
            {country.todayCases}
          </h5>
          <h5>
            <span className={style.green}> Cases recovered: </span>
            {country.recovered}
          </h5>
        </div>
        <div>
          <h5>
            <span className={style.red}>`Today&apos;s` Deaths: </span>
            {country.todayDeaths}
          </h5>

          <h5>
            Active Cases:
            {country.active}
          </h5>
          <h5>
            <span className={style.green}>Tests Carried Out: </span>
            {country.tests}
          </h5>
          <h5>
            <span className={style.red}>Critical Cases: </span>
            {country.critical}
          </h5>
        </div>
      </div>
      <div className={style.btn}>
        <Link to="/">
          {' '}
          <button type="button" className="btn btn-primary">Back</button>
          {' '}
        </Link>
      </div>
    </div>
  );
};
CountryInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default CountryInfo;
