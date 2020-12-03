import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import getAppStore from './redux/configureStore'
import {getData} from './redux/actions'


const store = getAppStore();
const template = (
  <Provider store={store}>
  <App />
</Provider>
);

store.dispatch(getData())
  .then(() => {
  ReactDOM.render(template, document.getElementById('root'));
});

reportWebVitals();
