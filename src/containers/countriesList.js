import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { DISPLAYCOUNTRIES } from '../actions';
import track from '../apis';
import ListCountry from '../components/showCountries';
import SearchBar from '../components/searchBar';


const mapDispatchToProps = dispatch => ({
  addCountries: countries => dispatch(DISPLAYCOUNTRIES(countries)),
});

const mapStateToProps = state => ({
  countries: state.countries,
  filter: state.filter,
});

const CountriesList = ({ addCountries, countries, filter }) => {
  useEffect(() => {
    async function fetchData() {
      await track.countries()
        .then(resp => addCountries(resp));
    }
    fetchData();
  }, [addCountries]);
  const selected = () => {
    if (filter !== '') {
      const searchPattern = new RegExp('^' + filter,'i');
      return countries.filter(name => searchPattern.test(name.country));
    }
    return countries;
  };
  const list = selected().map(country => <ListCountry country={country} key={country.country} />);
  return (
    <div>
      <SearchBar />
      {list}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
