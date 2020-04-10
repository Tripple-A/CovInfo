import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    countries: state.countries
})

const finder= (name,countries) => {
   let x = countries.find(country => country.country == name)
    return x
}

const CountryInfo = ({match, countries}) => {
const country = finder(match.params.name,countries)

return(
<div>
<Link to="/"> Home </Link>
<img src={`https://www.countryflags.io/${country.countryInfo.iso2}/flat/64.png`} alt="country-flag"/>
<h1>{country.country}</h1> 
<h5>Total Cases: {country.cases}</h5>
<h5>Today's Cases: {country.todayCases}</h5>
<h5>Total Deaths: {country.deaths}</h5>
<h5>Today's Deaths: {country.todayDeaths}</h5>
<h5>Cases Recovered: {country.recovered}</h5>
<h5>Active Cases: {country.active}</h5>
<h5>Critical Cases: {country.critical}</h5>
<h5>Tests Carried Out: {country.tests}</h5>
</div>
)
}

export default connect(mapStateToProps)(CountryInfo);