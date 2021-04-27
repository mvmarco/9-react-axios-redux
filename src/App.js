function App() {
  return (
    <div className="App">
      <h1>Axios and Redux</h1>
    </div>
  );
}

export default App;

// ############################
// AXIOS AND APIs
// ############################

/* 
  1. take an api: https://www.weatherapi.com/
  2. copy your API key, and use it to take data from the API explorer. 
     we get some data back and a call, a link which contains our API key
     and the q=query :
     http://api.weatherapi.com/v1/current.json?key=00000000000000&q=copenhagen&aqi=no
     a query provides a search and suggest methods for building results in an application.
     in our case is the city.
  
  3. npm install axios
  
  4. import axios from 'axios';
     Axios is a library that helps us make http requests to external resources. 
     In our React applications we often need to retrieve data from external APIs so it can 
     be displayed in our web pages

*/