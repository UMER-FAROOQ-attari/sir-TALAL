import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NameProvider } from './components/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NameProvider>
    <App />
    </NameProvider>
  </StrictMode>,
)
