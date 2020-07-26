import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./features/rootReducer";
import thunkMiddleware from 'redux-thunk'

//const epicMiddleware = createEpicMiddleware();
//const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
// @ts-ignore
//epicMiddleware.run(rootEpic);
//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

export default store