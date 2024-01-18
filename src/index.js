<<<<<<< HEAD
import React from 'react';
=======
import React,{useState, useCallback,useEffect} from 'react';
>>>>>>> 14f1a127d1d82b570b8db021f62bac5b59977b8d
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import Header from './Header';
import Footer from './Footer';
import List from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <List />
    <Footer />

  </>

=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 14f1a127d1d82b570b8db021f62bac5b59977b8d
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
