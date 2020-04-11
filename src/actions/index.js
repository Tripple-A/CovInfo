const DISPLAYCOUNTRIES = countries => ({
  type: 'SHOW COUNTRIES',
  countries,
});

const FILTER = word => ({
  type: 'CHANGE FILTER',
  word,
});


export { DISPLAYCOUNTRIES, FILTER };
