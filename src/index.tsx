import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./libs/initInterceptors";
import {Provider as StoreProvider} from 'react-redux';
import {store} from "./store/store";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import {useUserLoad} from "./sharedHooks/useUserLoad.hook";

ReactDOM.render(
  <React.StrictMode>
      <StoreProvider store={store}>
          <Router>
              <App />
          </Router>
      </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
