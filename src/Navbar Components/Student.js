
import Table from '../Table'
const Student = () => {
   
    

    function AddNewStudent(){

    }
  return (
    <div>
        <table>
            <tr>
                <td>
                <h1 className='heading'>Student Details</h1>
                </td>
                <td>
                <button className='button' onClick={AddNewStudent}>Add New Student</button>
                </td>
            </tr>
        </table>
    
     <Table />

    
    </div>
  )
}

export default Student
