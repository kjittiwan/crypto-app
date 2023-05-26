import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './contexts/Auth.jsx'
import CryptoContext from './contexts/CryptoContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <CryptoContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CryptoContext>
  </AuthContextProvider>  
)
