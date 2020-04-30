import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesList from '../containers/countriesList';
import CountryInfo from '../containers/countryInfo/countryInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import track from '../apis';
import Header from './header';

  const numberWithCommas = resp => {
  const keys = Object.keys(resp)
        keys.forEach(item => {
          if(typeof(resp[item]) === 'number')
          resp[item] = resp[item].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })
  return resp;
}

function App() {
  const [total, setTotal] = useState({});
  const [style, setStyle] = useState({ display: 'block' });
  
  useEffect(() => {
    async function fetchData() {
      await track.all().then(resp => setTotal(numberWithCommas(resp)));
    }
    fetchData();
  });
  const changeStyle = () => {
    if (style.display === 'block') {
      setStyle({ display: 'none' });
    } else {
      setStyle({ display: 'block' });
    }
  };
  return (
    <BrowserRouter>
      <Header total={total} style={style} change={changeStyle} />
      <Switch>
        <Route path="/" exact component={CountriesList} />
        <Route path="/covinfo/:name" exact component={CountryInfo} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
