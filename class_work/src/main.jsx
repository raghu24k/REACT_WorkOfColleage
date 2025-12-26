import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// This file is the ENTRY POINT of your React application.
// It finds the HTML element with id "root" (in index.html) and puts your React app inside it.
createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <App />
    // </StrictMode>,
)