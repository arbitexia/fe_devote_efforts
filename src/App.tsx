import React from 'react'
import './App.scss'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
