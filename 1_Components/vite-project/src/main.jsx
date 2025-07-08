import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyComponent(){
  return <h2>Hello</h2>
}

createRoot(document.getElementById('root')).render(
  <MyComponent/>
);
