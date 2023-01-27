import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Student from './Navbar Components/Student'
import Home from './Navbar Components/Home'
import Contact from './Navbar Components/Contact'



const App = () => {
  return (
    <>
     <div className='App11'>
      <Navbar />

      <Routes>
       <Route path='/' element = {<Home/>}  />
       <Route path='/Student' element={<Student/>} />
       <Route path='/Contact'  element={<Contact />} /> 

      </Routes>
    </div>
    </>
   
  )
}

export default App
