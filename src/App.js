import React, ( useState, useEffect } from 'react';
import axios from 'axios';

function App(){
  const [fact, setFact] = useState('');
  useEffect(() => {
    fetchFact();
  }, []);
  const fetchFact = () => {
    axios.get('https://catfact.ninja/fact')
    .then(response => {
      setFact(response.data.fact);
    })
    .catch(error => {
      console.log(error);
    });
  }
  const handleRefreshClick = () => {
    fetchFact();
  }
  return {
    <div className="App">
    <h1>Cat Facts</h1>
    <p>{fact}</p>
  <button onClick={handleRefreshClick}>Refresh</button>
  </div>
  );
}
export default App;
