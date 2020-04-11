import React from 'react';
import { connect } from 'react-redux';
import { FILTER } from '../actions';

const mapDispatchToProps = dispatch => ({
  filter: word => dispatch(FILTER(word)),
});
const SearchBar = ({ filter }) => {
  const updateFilter = e => {
    filter(e.target.value);
  };
  return (
    <div>
      <input placeholder="Search for a country here" onChange={e => updateFilter(e)} />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SearchBar);
