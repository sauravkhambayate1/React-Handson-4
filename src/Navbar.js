import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='Navbar'>
     <li type="none"><NavLink to={'/'} className={({isActive})=> (isActive ? 'active-class' : 'not-active')}>Home</NavLink></li>
     <li type="none"><NavLink to={'/Student'} className={({isActive})=> (isActive ? 'active-class' : 'not-active')}>Student</NavLink></li>
     <li type="none"><NavLink to={'/Contact'} className={({isActive})=> (isActive ? 'active-class' : 'not-active')}>Contact us</NavLink></li>
    </div>
  )
}

export default Navbar
