import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import theme from './pages/theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
    
  </React.StrictMode>
);


