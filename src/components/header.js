import React from 'react';
import PropTypes from 'prop-types';

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
        <li className="nav-item logo">
          Cov:
          <span className="info">:Info </span>
        </li>
        <li className="nav-item ml-auto mt-2">
          Get the latest Covid-19 stats here
        </li>
      </ul>
      <p className="mt-5" style={style}>
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
      <button type="button" onClick={e => toggle(e)}>Hide Stats</button>
    </div>
  );
};

Header.propTypes = {
  style: PropTypes.shape({
    display: PropTypes.string.isRequired,
  }).isRequired,
  total: PropTypes.shape({
    cases: PropTypes.number,
  }).isRequired,
  change: PropTypes.func.isRequired,
};

export default Header;
