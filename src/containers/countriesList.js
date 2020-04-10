import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import DISPLAYCOUNTRIES from '../actions';
import track from '../apis';


const mapDispatchToProps = dispatch => ({
    addCountries: countries => dispatch(DISPLAYCOUNTRIES(countries))
})

const CountriesList = ({addCountries}) => {
    useEffect(() => {
        async function fetchData() {
          await track.countries()
            .then(resp => addCountries(resp) )   
        }
        fetchData();
      }, [])
   return(
       <div>Hello</div>
   )
}

export default connect(null,mapDispatchToProps)(CountriesList)