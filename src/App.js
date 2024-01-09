import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pages from './components/Pages'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Pages/>
    </BrowserRouter>
  )
}

export default App