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
      <div className={style.flexi}>
        <img className={style.img} alt="covid19-logo" src="https://images.unsplash.com/photo-1584573062918-ad06605b3635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <h1 className={style.h1}>{country.country}</h1>
      </div>
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
            <span className={style.green}>Total Tests: </span>
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

          <h5 className={style.even}>
            <span className={style.red}>Today&apos;s Deaths: </span>
            <span className={style.num}>{country.todayDeaths}</span>
          </h5>
          <h5 className={style.odd}>
            <span className={style.green}> Recovered: </span>
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
