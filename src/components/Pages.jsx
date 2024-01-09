import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import Books from './Books'


const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>       
        <Route path='/books' element={<Books/>}/>    
        <Route path='/:name' element={<Main/>}/>        
    </Routes>
  )
}

export default Pages