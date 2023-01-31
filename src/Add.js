import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DataContext from './DataContext';
import './App.css'

const Add = () => {

  const context = useContext(DataContext)
  const navigate = useNavigate()

  const[data, setData] = useState({
    name : "",
    age : "",
    course : "",
    batch: ""
  })

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value}) 
    console.log(data)
   }
   const onSubmit=(e)=>{
    e.preventDefault()
    console.log(context.entries)
   context.updateFunction(
    (prevObj)=>{
        prevObj.push(data);
        return (prevObj)
    }
   );
   navigate('/');
}

  return (
    <div>
      <h1>Add Student</h1>
      <div id='form-head'>
        <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label><br />
        <input className='form-box' onChange={handleChange} type="text" name="name" value={data.name} placeholder='name'/><br />
        <label htmlFor="age">Age</label><br />
        <input className='form-box' onChange={handleChange} type="number" name="age" value={data.age} placeholder='age'/><br />
        <label htmlFor="course">Course</label><br />
        <input className='form-box' onChange={handleChange} type="text" name="course" value={data.course} placeholder='course'/><br />
        <label htmlFor="batch">Batch</label><br />
        <input className='form-box' onChange={handleChange} type="text" name="batch" value={data.batch} placeholder='batch'/><br />
        <button className='btn' type="submit">Add Student</button>
        </form>
        </div>
    </div>
  )
}

export default Add
