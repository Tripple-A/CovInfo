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
          <h5 data-testid="total" className={style.odd}>
            Total Cases:
            <span className={style.num}>{country.cases}</span>
          </h5>
          <h5 className={style.even}>
            <span className={style.red}>Total Deaths: </span>
            <span className={style.num}>{country.deaths}</span>
          </h5>
          <h5 className={style.odd}>
            <span className={style.green}>Tests Carried Out: </span>
            <span className={style.num}>{country.tests}</span>
          </h5>
          <h5 className={style.even}>
            Active Cases:
            <span className={style.num}>
              {' '}
              {country.active}
              {' '}
            </span>
          </h5>
        </div>
        <div className={style.second}>
        <h5 className={style.odd}>
            <span className={style.red}>Today&apos;s Cases:</span>
            <span className={style.num}>{country.todayCases}</span>
          </h5>

          <h5 className={style.odd}>
            <span className={style.red}>Today&apos;s Deaths: </span>
            <span className={style.num}>{country.todayDeaths}</span>
          </h5>
          <h5 className={style.even}>
            <span className={style.green}> Cases recovered: </span>
            <span className={style.num}>
              {' '}
              {country.recovered}
              {' '}
            </span>
          </h5>
         
         
          <h5 className={style.even}>
            <span className={style.red}>Critical Cases: </span>
            <span className={style.num}>{country.critical}</span>
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
