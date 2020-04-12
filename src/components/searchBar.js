import React from 'react';
import PropTypes from 'prop-types';
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
      <input data-testid="input" placeholder="Search for a country here" onChange={e => updateFilter(e)} />
    </div>
  );
};

SearchBar.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchBar);
