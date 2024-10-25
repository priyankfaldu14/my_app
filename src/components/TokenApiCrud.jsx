import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function TokenApiCrud() {
    const [obj, setobj] = useState({})
    const [aray, setaray] = useState([])

    const auth = {
        headers: {
            Authorization: "Bearer 18608b3f8356fe5da81fd2bee872e6737e3b515674fc02249464bf12ee37a64a"
        }
    }

    const getApiData=()=>{
        axios.get('https://gorest.co.in/public/v2/users',auth ).then((res) => {
            // console.log(res.data);
            setaray([...res.data])
        })
      }

    useEffect(() => {
        getApiData()

    }, [])
    console.log(aray);


    const getaData = (e) => {
        obj[e.target.name] = e.target.value
        setobj({ ...obj })
    }
    const saveData = () => {
        if(obj.id !== undefined){
            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`,
                position:"bottom-end"
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    if(obj.id === undefined){
                        axios.post('https://gorest.co.in/public/v2/users', obj, auth).then((res) => {
                            console.log(res.data);
                            getApiData()
                            Swal.fire("Saved!", "", "success");
                        }).catch(err=>{
    
                        })
                    }else{
                        axios.put('https://gorest.co.in/public/v2/users/'+obj.id, obj, auth).then((res) => {
                            console.log(res.data);
                            getApiData()
                        })
                    }
                 
                } else if (result.isDenied) {
                  Swal.fire("Changes are not saved", "", "info");
                }
              });
        }else{
            Swal.fire({
                position: "top-end",
                toast:true,
                icon: "error",
                title: "Object is empty",
                showConfirmButton: false,
                timer: 3500,
                timerProgressBar:true
              });
        }
        

    }

    const deleteData=(id)=>{
        axios.delete('https://gorest.co.in/public/v2/users/'+id,auth).then(res=>{
            console.log(res);
            getApiData()
        })
    }

    const editData=(id)=>{
        axios.get('https://gorest.co.in/public/v2/users/'+id,auth).then(res=>{
            console.log(res.data);
            setobj({...res.data})
        })
    }

    return (
        <div>
            <form action="" className='w-50 mx-auto shadow-lg p-3'>
                <label htmlFor="" className='d-block'>Name</label>
                <input type="text" className='w-100' name='name' value={obj.name} onChange={getaData} />
                <label htmlFor="" className='d-block'>Email</label>
                <input type="text" className='w-100' name='email' value={obj.email} onChange={getaData} />

                <label htmlFor="" className='d-block'>Gender</label>
                <input type="radio" name='gender' onChange={getaData} checked={obj.gender === 'male'} value={'male'} /> Male
                <input type="radio" name='gender' onChange={getaData} value={'female'} checked={obj.gender === 'female'} /> Female <br />

                <label htmlFor="" className='d-block'>Status</label>
                <input type="radio" name='status' onChange={getaData} checked={obj.status === 'active'} value={'active'} /> active
                <input type="radio" name='status' onChange={getaData} value={'inactive'} checked={obj.status === 'inactive'} /> inactive <br />
                <button type='button' className='btn btn-success mt-2' onClick={saveData}>Save</button>
            </form>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>gender</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        aray.map((x, i) => {
                            return <tr key={i}>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.gender}</td>
                                <td>{x.status}</td>
                                <td>
                                  <button onClick={()=>editData(x.id)} className='btn btn-warning'>Edit</button>
                                </td>
                                <td>
                                  <button onClick={()=>deleteData(x.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TokenApiCrud