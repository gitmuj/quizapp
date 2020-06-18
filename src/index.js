import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './styles/App.css'

const store = createStore(reducers, applyMiddleware(thunk)); //hooks up middleware to redux store


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.querySelector('#root'));
