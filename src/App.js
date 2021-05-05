import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <h1>Axios and Redux</h1>
      <h1>Counter: 0</h1>
      <button>Increment</button>
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
  3. if you push the code in production to host such as netlify the api won't work because
     the .env file is not found. So you need to go to "build and deploy", "environments" and add
     the variable name we used inside the .env file.
  4. put the .env file in the .gitignore
  
  
  // ############################
  // REDUX
  // ############################
  
  These notes are based on an example of a counter:
  
  import React {useEffect, useState} from "react";
  
  function App() {
    const [counter, setCounter] = useState(0);
    return(
      <div>
        <h1>Counter: {counter} </h1>
        <button onClick={()=> setCounter((initialNumber) => initialNumber + 1)}></button>
      </div>
    )
  }
  
  export default App;
  
  // ############################
  // REDUX: STORE
  // ############################
  Redux separates each individual states, that before we put in the components or we lifted on 
  the App level, to its own world, its own file, independent from everything. This place is 
  called "STORE". "STORE" is a globalized state.
  ----------------------------------------------------------
  // ############################
  // REDUX: ACTION
  // ############################
  Another important definition of redux is "ACTION". It basically describes what we are about to
  do. It just describes the action. It is literally a function that returns a name as key 
  with what we need/want to do. For instance: 

  const = increment = () => {
    return{
      type: 'INCREMENT'
    }
  }

  "type" is essentially the "name" of the action
  ----------------------------------------------------------
  The next terminology is the "REDUCER", another function that filters out the ACTION. The "REDUCER"
  will take a look at the action, and based on what the action is will modify the state.
  For instance the reducer function will take in the initial state, and the action as arguments.
  Based on the action we are going to do something with the state. Switch select
  the action as soon as it matches with the type, when the match occurs something will happen 
  to the state. If the case is Increment we want to return the state + 1.

  const counterReducer = (state = 0, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state -1;
    }
  }

  essentially the reducer is the logic that says what is gonna happen to the state.
  ----------------------------------------------------------
  "DISPATCH" is basically sending the action to the reducer. It is the fire button that fires
  the action to the reducer. So you can say:

  DISPATCH('INCREMENT')

  what is gonna do is going to the reducer, the reducer is gonna check what type of action
  was fired. Boom the state gets updated.
  ----------------------------------------------------------
  
  steps to use Redux:

  1. npm install redux react-redux
     "install redux" is a package can be used with different libraries, not only react while
     "react-redux" is the middle man that connects React with Redux
  2. import on index.js or on a separate file:  import {createStore} from 'redux';
  3. create a folder called "actions" and another one called "reducers"
  4. in the "reducers" folder create a file with the name of the reducer for instance
     counterReducer. Put the function in counterReducer with as argument the initial state
     and the object "action" that includes all the action:

          const counterReducer = (state = 0, action) => {
            switch (action.type) {
              case "INCREMENT":
                return state + 1;
              case "DECREMENT":
                return state - 1;
              default:
                return state;
            }
          };

          export default counterReducer;


  5. we can create another reducer, for instance, if the user is logged in do something to the state.
     so we create anotehr file, called isLogged.js with the reducer function:

        const loggedReducer = (state = false, action) => {
          switch (action.type) {
            case "SIGN_IN":
              return !state;
            default:
              return state;
          }
        };

        export default loggedReducer;



  6. create a store, import on index.js:  import {createStore} from 'redux';
     the store takes one argument, the reducer. so if we want the "counterReducer" we do:
                              let store = createStore(counterReducer)
     if we want the "loggedReducer" we do:
                              let store = createStore(loggedReducer)
     but you cannot pass both in one store. So what we can do is to import "combineReducers"
     as follow:
     import {createStore, combineReducers} from 'redux;

     then you just import in index.js this:
     import counterReducer from "./reducers/counter";
     import loggedReducer from "./reducers/isLogged";
     other than:      import {createStore, combineReducers} from 'redux;

     then in index.js you can do:

        const allReducers = combineReducers({
          counter: counterReducer,
          isLogged: loggedReducer
        })

        export default allReducers;
    
      -----------------------------------------

      the ideal would be creating in the reducers folder another file called index.js and put:


                        import counterReducer from "./counter";
                        import loggedReducer from "./isLogged";
                        import {combineReducers} from 'redux';

                        const allReducers = combineReducers({
                          counter: counterReducer,
                          isLogged: loggedReducer,
                        })

                        export default allReducers;

      while in the original index.js you have just to import:
      import {createStore} from "redux";
      import allReducers from "./reducers"

      and create the store:

      const store = createStore(
        allReducers
      )
      -----------------------------------------
      REDUX DEV TOOLS EXTENSION: 

      important: go here: https://github.com/zalmoxisus/redux-devtools-extension
      find the green line: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      copy it and the go to the original index.js and in the store, after all the reducers,
      paste it

      const store = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
        
      This will open a chrome extension, a state manager with redux. So you can see the:
      - action
      - state



  
*/
