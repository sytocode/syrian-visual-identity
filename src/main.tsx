import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initWebMCP } from './utils/webmcp';

// Initialize WebMCP tools for AI coding assistants & browser extensions
initWebMCP();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

