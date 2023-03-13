import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <li>
        <ul><Link to ="about">About</Link></ul>
        <ul><Link to = "signup">Signup</Link></ul>
        <ul><Link to = "signin">Signin</Link></ul>
        </li>
        
    </div>
  )
}

export default NavBar