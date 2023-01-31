import React from 'react'
import { useContext } from 'react';
import DataContext from './DataContext';
import { Link } from 'react-router-dom';
import './App.css'
const Table1 = () => {
    const context = useContext(DataContext);
    console.log(context);

const handleAdd = ()=>{
  console.log("Add called")
}

  return (
   
    <div>
      <Link to= "/addStudent">
     <button className='button' onClick={handleAdd}>Add New Students</button>
      </Link>

       <table border={1} className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
        context.entries.map((item,index) => (
          // each item is an object
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.course}</td>
            <td>{item.batch}</td>
            <td>
              {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                <Link to='./editStudent' state={{data:index}}>
                    Edit
                </Link> 
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table1
