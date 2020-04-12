const DISPLAYCOUNTRIES = countries => ({
  type: 'SHOW COUNTRIES',
  countries,
});

const FILTER = word => ({
  type: 'CHANGE FILTER',
  word,
});

const RESET = word => ({
  type: 'RESET',
  word,
});


export { DISPLAYCOUNTRIES, FILTER, RESET };
