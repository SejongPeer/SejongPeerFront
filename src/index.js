import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import ReactGA from 'react-ga4';


const root = ReactDOM.createRoot(document.getElementById('root'));
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);
root.render(
  
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  
);

reportWebVitals();
