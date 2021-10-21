import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import movies from './reducers';
import App from './components/App';

const store = createStore(movies);

// console.log("Store : ",store);
// console.log("State : ",store.getState())
// // console.log("State : ",sto)

// store.dispatch({
//   type : "ADD_MOVIES",
//   movies : [{name : 'Krrish'}]
// })

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store= {store}/>
  </React.StrictMode>,
  document.getElementById('root')
);