import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import combineReducers from './reducers';
import App from './components/App';

// const logger = function({ dispatch , getState}){
//   return function(next){
//     return function(action){
//       console.log("Action type", action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch,getState}) => (next) => (action) =>{
  //logger code
  if( typeof action !== 'function' ) {
    console.log("Action type", action.type);
  }
  next(action);
}

// const thunk = ({dispatch,getState}) => (next) => (action) =>{
//   //logger code
//   // console.log("Action type", action.type);
//   if( typeof action === 'function' ) {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }



const store = createStore(combineReducers,applyMiddleware(logger,thunk));

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