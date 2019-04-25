import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import indexReducer from './index.reducer';
import countReducer from './count.reducer';
import Root from './router/router';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';

//创建store
const reducer=combineReducers({
  indexReducerKey:indexReducer,
  countReducerKey:countReducer,
})
const store=createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Root />
  </BrowserRouter>
</Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
