import React from 'react'
import './styles/App.scss'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import MouseActionProvider from './components/mouseActionProvider'

function App() {
  return (
    <BrowserRouter>
      <MouseActionProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </MouseActionProvider>
    </BrowserRouter>
  )
}

export default App
