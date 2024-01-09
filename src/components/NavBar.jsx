import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../App.css"
const NavBar = () => {
  const [name,setName]=useState('');
  const navigate=useNavigate();
  return (
    <div className='navbar'> 
       <h2>Book Store</h2>
      
           <div className='navlink'>
           <NavLink to={"/"} style={{textDecoration:"none",color:"black"}}><li>Home</li></NavLink>
            <NavLink to={"/books"} style={{textDecoration:"none",color:"black"}}><li>Books</li></NavLink>
      
           </div>
        <div className='input-field'>
        <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Book Name'/>
        <button onClick={()=>{navigate('/ ' +name)}}>Search</button>
        </div>
    </div>

  )
}

export default NavBar