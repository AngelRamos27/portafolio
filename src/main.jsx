import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./i18n.js";
import { HashRouter, } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
      <Suspense fallback="Loading...">
            <App />
      </Suspense>
)
