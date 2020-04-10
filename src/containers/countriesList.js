import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import DISPLAYCOUNTRIES from '../actions';
import track from '../apis';
import ListCountry from '../components/showCountries'


const mapDispatchToProps = dispatch => ({
    addCountries: countries => dispatch(DISPLAYCOUNTRIES(countries))
})

const mapStateToProps = state => ({
    countries: state.countries
})

const CountriesList = ({addCountries, countries}) => {
    useEffect(() => {
        async function fetchData() {
          await track.countries()
            .then(resp => addCountries(resp) )   
        }
        fetchData();
      }, [addCountries])

    const list = countries.map(country => <ListCountry country={country} key={country.country}/>)  
   return(
       <div>
           {list}
       </div>
   )
}

export default connect(mapStateToProps,mapDispatchToProps)(CountriesList)