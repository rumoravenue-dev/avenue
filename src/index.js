import React from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'

import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/js/bootstrap.min.js';

function Title() {
  useEffect(() => {
    document.title = 'My Page Title';
  }, []);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
