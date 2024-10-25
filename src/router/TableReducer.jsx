import React, { useEffect, useReducer, useState } from 'react'
import NavbarHOC from './NavbarHOC'
import { reducer } from './reducerApi'
import { Link, useNavigate } from 'react-router-dom'

function TableReducer() {
    const [state, dispatch] = useReducer(reducer, [])
    const [aray, setaray] = useState([])
   
    useEffect(() => {
      dispatch({type:"GET"})
    }, [])

    useEffect(() => {
        getData()
    }, [state])
    
    const getData =async()=>{
        setaray([...await state]);
    }

    console.log(aray);
    const deleteData =(id)=>{
        dispatch({type:"DELETE",id:id})
    }
    
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>profile</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>city</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>hobbies</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    aray.map((x,i)=>{
                        return(
                            <tr key={x._id}>
                                <td>
                                    <img src={x.image} alt="" width={50} height={50} srcset=""/>
                                </td>
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.city}</td>
                                <td>{x.age}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobbies}</td>
                                <td>
                                 <Link to={'/'+x._id}> <button className='btn btn-warning'>Edit</button></Link>
                                </td>
                                <td>
                                  <button onClick={()=>deleteData(x._id)} className='btn btn-danger'>Delete</button>
                                </td> 
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default NavbarHOC(TableReducer)