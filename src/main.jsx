import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { WebPortfolio } from './WebPortfolio.jsx'

import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebPortfolio />
    </BrowserRouter>
  </React.StrictMode>,
)
