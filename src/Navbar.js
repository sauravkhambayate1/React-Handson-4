import React from 'react'
import { NavLink } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Student from './Navbar Components/Student'
import Home from './Navbar Components/Home'
import Contact from './Navbar Components/Contact'

const Navbar = () => {
  return (
    <div className='Navbar'>
     <li type="none"><NavLink to={'/'} className={({isActive})=> (isActive ? 'active-class' : 'not-active')}>Home</NavLink></li>
     <li type="none"><NavLink to={'/Student'} className={({isActive})=> (isActive ? 'active-class' : 'not-active')}>Student</NavLink></li>
     <li type="none"><NavLink to={'/Contact'} className={({isActive})=> (isActive ? 'active-class' : 'not-active')}>Contact us</NavLink></li>


     <Routes>
       <Route path='/' element = {<Home/>}  />
       <Route path='/Student' element={<Student/>} />
       <Route path='/Contact'  element={<Contact />} /> 

      </Routes>
    </div>
  )
}

export default Navbar
