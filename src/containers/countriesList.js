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
    console.log(countries[1])
    useEffect(() => {
        async function fetchData() {
          await track.countries()
            .then(resp => addCountries(resp) )   
        }
        fetchData();
      }, [])

    const list = countries.map(country => <ListCountry country={country} key={country}/>)  
   return(
       <div>
           {list}
       </div>
   )
}

export default connect(mapStateToProps,mapDispatchToProps)(CountriesList)