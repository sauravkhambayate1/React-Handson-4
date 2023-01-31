import React from 'react'
import Navbar from './Navbar'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Table1 from './Table1'
import DataContext from './DataContext'
import { useState } from 'react'
import Edit from './Edit'
import Contact from './Navbar Components/Contact'
import Student from './Navbar Components/Student'
import Add from './Add'
const App = () => {
  const [data, setData] = useState([
    { name: 'Student1', age: 21, course: "MERN", batch: "October" },
    { name: 'Student2', age: 22, course: "MERN", batch: "October" }
   
  ]);



  return (
    <>
      <div className='App11'>
        <Navbar />

        <Routes>

          <Route path='/' element={<DataContext.Provider value={{ entries: data, updateFunction: setData }}>
            <Table1 />
          </DataContext.Provider>} />

          <Route path='/editStudent' element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <Edit />
            </DataContext.Provider>
          } />

          <Route path='/addStudent' element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <Add />
            </DataContext.Provider>
          } />

          <Route path='/Student' element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <Student />
            </DataContext.Provider>
          } />

          <Route path='/Contact' element={
            <DataContext.Provider value={{ entries: data, updateFunction: setData }}>
              <Contact />
            </DataContext.Provider>
          } />
        </Routes>

      </div>
    </>

  )
}

export default App
