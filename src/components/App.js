import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesList from '../containers/countriesList';
import CountryInfo from './countryInfo';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>CovInfo</h2>

      </div>
      <Switch>
        <Route path="/" exact component={CountriesList} />
        <Route path="/covinfo/:name" exact component={CountryInfo} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
