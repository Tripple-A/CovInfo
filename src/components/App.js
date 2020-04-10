import React from 'react';
import CountriesList from '../containers/countriesList';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountryInfo from './countryInfo'


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <h2>CovInfo</h2>
      
    </div>
    <Switch>
    <Route path="/" exact component={ CountriesList }></Route>
    <Route path="/covinfo/:name" exact component={ CountryInfo }></Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
