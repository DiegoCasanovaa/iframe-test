import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {
  return (
    <div>
        <nav className="navBar" >
        <div className="navContainer">
          <div className="navContent">
              <NavLink to={'/home'} className='navOption'> Home </NavLink>
              <NavLink to={'/dashboard'} className="navOption" > Dashboard </NavLink>
              <NavLink to={"/contactos"} className="navOption" > Contactos </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}
