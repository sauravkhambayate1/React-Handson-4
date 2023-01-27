import React from 'react'
import "./App.css"

const Table = () => {
   
    return (
        <>
            <div className='main-table'>
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>

                    </tr>
                    
                    <tr>
                        <td>John</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    
                    <tr>
                        <td>Doe</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>November</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Biden</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>September</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Jai</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Donald</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td>Edit</td>
                    </tr>
                    <tr>
                        <td>Yash</td>
                        <td>21</td>
                        <td>MERN</td>
                        <td>April</td>
                        <td>Edit</td>
                    </tr>
                </table>
            </div>
        </>

    )
}

export default Table

