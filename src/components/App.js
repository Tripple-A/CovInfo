import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesList from '../containers/countriesList';
import CountryInfo from './countryInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';


function App() {
  return (
    <BrowserRouter>
      <div className="jumbotron px-5">
      <ul class="nav">
  <li class="nav-item logo">
    Cov:<span className="info">:Info </span>
  </li>
  <li class="nav-item ml-auto mt-2">
    Get the latest Covid-19 stats here
  </li>
</ul>
      </div>
      <Switch>
        <Route path="/" exact component={CountriesList} />
        <Route path="/covinfo/:name" exact component={CountryInfo} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
