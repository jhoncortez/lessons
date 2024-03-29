import React from 'react';
import ReactDOM from 'react-dom';

// import the browser router
import {BrowserRouter} from 'react-router-dom'
import {FavoritesContextProvider} from './store/favorites-context'



import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
