import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CryptoContext from './contexts/Currency.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CryptoContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CryptoContext>
  
)
