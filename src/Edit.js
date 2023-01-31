import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DataContext from './DataContext'
// import { useEffect } from 'react'className={'form-box'} 

const Edit = () => {
    const context = useContext(DataContext)
    console.log(context)
    const location = useLocation()
    // console.log(location)
    const navigate = useNavigate()
    const index = location.state.data
    console.log(navigate)



    function UpdateClick(e) {
        console.log(context.entries[index])
        context.updateFunction(
            (prevObj) => {
                prevObj[index] = newObj
                return (prevObj)
            }
        )
        navigate('/')
    }
    const newObj = {

        name: context.entries[index].name,
        age: context.entries[index].age,
        course: context.entries[index].course,
        batch: context.entries[index].batch
    }

    function UpdateChange(event) {
        newObj[event.target.name] = event.target.value
    }


    return (
        <div>
            <div className='edit-table'>
                <form>

                  <b>Name:  </b>  <input className={'form-box'} type="text" name='name' onChange={UpdateChange} /><br />
                  <b>Age:  </b> :  <input className={'form-box'} type="number" name='age' onChange={UpdateChange} /><br />
                  <b>Course:  </b> <input className={'form-box'} type="text" name='course' onChange={UpdateChange} /><br />
                  <b>Batch:  </b> : <input className={'form-box'} type="text" name='batch ' onChange={UpdateChange} /><br />

                    <button  className={'btn'} onClick={UpdateClick} >Update</button>
                </form>

            </div>

        </div>
    )
}

export default Edit
