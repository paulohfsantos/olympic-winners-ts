import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WinnersProvider } from './context/winners.provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WinnersProvider>
      <App />
    </WinnersProvider>
  </React.StrictMode>
)
