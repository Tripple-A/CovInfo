import React from 'react';
import track from './apis'


function App() {
  console.log(track.countries())
  return (
    <div className="App">
      <h2>CovInfo</h2>
    </div>
  );
}

export default App;
