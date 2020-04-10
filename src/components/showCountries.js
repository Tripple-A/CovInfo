import React from 'react';
import { Link } from "react-router-dom";

const ListCountry = ({country}) =>(

  <div>
<Link to={`/covinfo/${country.country}`}>
<div>
<img src={`https://www.countryflags.io/${country.countryInfo.iso2}/flat/64.png`} alt="country-flag"/>
      <h3>{country.country}</h3>
</div>
</Link>
      
  </div>
)

export default ListCountry