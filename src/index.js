import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC1frpzg3r7xcPEi0RAv6tE9hMaZcqyQO0',
  authDomain: 'coderhouse-ecommerce-dda84.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-dda84',
  storageBucket: 'coderhouse-ecommerce-dda84.appspot.com',
  messagingSenderId: '36764049726',
  appId: '1:36764049726:web:55a36e0cfcb92e862c8c6f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
