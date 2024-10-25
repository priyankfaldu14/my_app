import React, { useEffect, useState } from 'react'
import NavbarHOC from './NavbarHOC'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { imageZoomIn, imageZoomOut } from './imageState'
import { IoCloseSharp } from "react-icons/io5";

function TableRouter() {
    const navigate = useNavigate()
    const [aray, setaray] = useState([])
    useEffect(() => {
        getApiData()
    }, [])

    const getApiData =()=>{
        axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res)=>{
            console.log(res.data.data);
            setaray([...res.data.data])
          })
    }

    const deleteData =(id)=>{
        axios.delete('https://student-api.mycodelibraries.com/api/user/delete?id='+id).then((res)=>{
            console.log(res.data);
            getApiData()
        })
    }

    const editData =(id)=>{
        axios.get("https://student-api.mycodelibraries.com/api/user/get-user-by-id?id="+id).then((res)=>{
            console.log(res.data.data);
            navigate("/")
        })
    }
    
  return (
    <>
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
                                    <img src={x.image} alt="" width={50} height={50} srcset="" onClick={()=>imageZoomIn(x.image)}/>
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
        <div className='outerImage' onClick={imageZoomOut}>
            <div className='innerImage'></div>
            <IoCloseSharp className='position-fixed end-0 top-0 text-white m-5' size={20} style={{cursor:"pointer"}} onClick={imageZoomOut}/>
        </div>
    </>
  )
}

export default NavbarHOC(TableRouter)