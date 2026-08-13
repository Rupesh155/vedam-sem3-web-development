import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav'>
        <Link to={"/"}>   
   
        <li>Home</li>
        </Link>
       
        <Link to={'/about'}>  
        <li>About</li>
        </Link>
        <li>list</li>

        {/* https://www.reddit.com/r/cats/ */}


    </div>
  )
}

export default NavBar