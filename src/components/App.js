import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesList from '../containers/countriesList';
import CountryInfo from '../containers/countryInfo/countryInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CountriesList} />
        <Route path="/covinfo/:name" exact component={CountryInfo} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
