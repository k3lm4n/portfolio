import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Portfolio - Kelman Santos</title>
        <meta name="description" content="Kelman Santos personal website "/>
      </Helmet>
    </HelmetProvider>
    <App />
  </React.StrictMode>,
)
