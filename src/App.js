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

  5. by default when the page reloads we fetch Kbh data by default with UseEffect
     we pass "axios" in and we can decide to do a get request (axios.get) or a post (axios.post)
     this will give usa promise that we have to do a .then in order to get the value.
     the then() method, takes in a callback method. The callback method will pass you the data
     of the API, which we will then log to check them out:

      const location = axios.get(
        'http://api.weatherapi.com/v1/current.json?key=XXXXXXXXX&q=copenhagen&aqi=no'
      ).then((data) => {
        console.log(data)
      }).catch(err => console.log(err, "Sorry something went wrong, try later"));
      },[])

      .then is like saying API.data to get the value, but since it is a promise you cannot do it
      in this the way. .catch is in case the promise does not work.

      data is the whole data that we have, the API has a key called data where there are the info we
      need so we do data.data (example)

      check the console:) data.data.location will give us the location and so on
      like data.date.current.something will give us the



// ############################
// .ENV
// ############################

  When working with API, few steps are necessary:

  1. In the root folder of your project create a: .env file
  2. write: REACT_APP followed by the name of your project or whatever name you want to give
     to your api key. such as: REACT_APP_WEATHER_APP= XXXXXXXXXXXXXXXX here you paste the api key
     from your app and replace it with:
     from: 'http://api.weatherapi.com/v1/current.json?key=XXXXXXXXX&q=copenhagen&aqi=no'
     to (backticks also): `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=copenhagen&aqi=no`


*/