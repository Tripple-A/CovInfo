import React from 'react';
import PropTypes from 'prop-types';
import '../styles/marquee.css';
import { Link } from 'react-router-dom';


const Header = ({ total, style, change }) => {
  const toggle = e => {
    if (e.target.textContent === 'Hide Stats') { e.target.textContent = 'Show Stats'; } else {
      e.target.textContent = 'Hide Stats';
    }
    change();
  };
  return (
    <div className="jumbotron">
      <ul className="nav">
        <Link to='/'>
        <li className="nav-item logo" data-testid="cov">
          Cov:
          <span className="info">:Info </span>
        </li>
        </Link>
        <li className="nav-item ml-auto mt-2">
          Get the latest Covid-19 stats here
        </li>
      </ul>
      <div className="marquee">
        <button type="button" onClick={e => toggle(e)}>Hide Stats</button>
        <p style={style}>
          Total Cases: 
          {total.cases}
          {' '} 
          , Total Deaths: 
          {total.deaths}
          {' '}
          ,
          Total Recovered: 
          {total.recovered}
          {' '}
          , Total Tests: 
          {total.tests}
          {' '}
          , Total Active: 
          {total.active}
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  style: PropTypes.shape({
    display: PropTypes.string.isRequired,
  }).isRequired,
  total: PropTypes.shape({
    cases: PropTypes.string,
    death: PropTypes.string,
    recovered: PropTypes.string,
    active: PropTypes.string,
    deaths: PropTypes.string,
    tests: PropTypes.string,
  }).isRequired,
  change: PropTypes.func.isRequired,
};

export default Header;
