// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 Add this
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/My-Portfolio/"> {/* 👈 IMPORTANT */}
      <App />
    </Router>
  </React.StrictMode>
);
