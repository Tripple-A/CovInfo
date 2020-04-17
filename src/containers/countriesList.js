import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DISPLAYCOUNTRIES, RESET } from '../actions';
import track from '../apis';
import ListCountry from '../components/showCountries';
import SearchBar from './searchBar';


const mapDispatchToProps = dispatch => ({
  addCountries: countries => dispatch(DISPLAYCOUNTRIES(countries)),
  reset: word => dispatch(RESET(word)),
});

const mapStateToProps = state => ({
  countries: state.countries,
  filter: state.filter,
});

const CountriesList = ({
  addCountries, countries, filter, reset,
}) => {
  useEffect(() => {
    reset('');
    async function fetchData() {
      await track.countries()
        .then(resp => addCountries(resp));
    }
    if (countries.length === 0) fetchData();
  }, [addCountries, reset, countries.length]);
  const selected = () => {
    if (filter !== '') {
      const searchPattern = new RegExp(`^${filter}`, 'i');
      return countries.filter(name => searchPattern.test(name.country));
    }
    return countries;
  };
  const list = selected().map(country => <ListCountry country={country} key={country.country} />);
  return (
    <div>
      <SearchBar />
      <div className="list">
        {list}
      </div>
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  addCountries: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
