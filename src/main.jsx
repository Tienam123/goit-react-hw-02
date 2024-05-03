import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from '@/App.jsx';
import {GlobalStyle} from '@/GlobalStyle.js';


ReactDOM.createRoot(document.getElementById('wrapper'))
    .render(
        <React.StrictMode>
          <App/>
          <GlobalStyle/>
        </React.StrictMode>,
    );
