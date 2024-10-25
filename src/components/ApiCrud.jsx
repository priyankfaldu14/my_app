import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiCrud() {
    const [aray, setaray] = useState([])
    const [obj, setobj] = useState({hobbies:[]})
    const [blankObj, setBlankObj] = useState({hobbies:[]})
    
    useEffect(() => {
      getApiData()
    }, [])    

    const getApiData=()=>{
      axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res)=>{
        setaray([...res.data.data])
      }).catch((err)=>{
        console.log(err);
      })
    }

    const getaData =(e)=>{
      if (e.target.type === 'checkbox') {
        if (e.target.checked) {
          console.log(e.target.value);
          obj.hobbies.push(e.target.value);
        } else {
          console.log('unchecked', e.target.value);
          obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value)
        }
        console.log(obj.hobbies);
  
        blankObj.hobbies = []
      } else {
        obj[e.target.name] = e.target.value
        blankObj[e.target.name] = ''
      }
      setobj({...obj})
    }
    
    const saveData=()=>{
      console.log(obj._id);
      if(obj._id === undefined){
        axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((res)=>{
          console.log(res.data);
          getApiData()
        }).catch((err)=>{
          console.log(err);
        })
      }else{
        obj.id = obj._id
        axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((res)=>{
          console.log(res.data);
          getApiData()
        }).catch(err=>{
          console.log(err);
        })
      }
      setobj({...blankObj})
    }
    const editData =(id)=>{
      axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id="+id).then((res)=>{
        console.log(res.data.data);
        setobj({...res.data.data})
      })
      
    }
    const deleteData=(id)=>{
      console.log(id);
      axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((res)=>{
        console.log(res.data);
        getApiData()
      }).catch(err=>{
        console.log(err);
        
      })
    }
  return (
    
    <div>
       <form action="" className='w-50 mx-auto shadow-lg p-3'>
        <label htmlFor="" className='d-block'>firstName</label>
        <input type="text" className='w-100' name='firstName' value={obj.firstName} onChange={getaData} />
        <label htmlFor="" className='d-block'>lastName</label>
        <input type="text" className='w-100' name='lastName' value={obj.lastName} onChange={getaData} />
        <label htmlFor="" className='d-block'>city</label>
        <input type="text" className='w-100' name='city' value={obj.city} onChange={getaData} />
        <label htmlFor="" className='d-block'>age</label>
        <input type="number" className='w-100' name='age' value={obj.age} onChange={getaData} />
        <label htmlFor="" className='d-block'>Gender</label>
        <input type="radio" name='gender' onChange={getaData} checked={obj.gender === 'male'} value={'male'} /> Male
        <input type="radio" name='gender' onChange={getaData} value={'female'} checked={obj.gender === 'female'} /> Female <br />
        <label htmlFor="" className='d-block'>Hobbies</label>
        <input type="checkbox" name='hobbies' onChange={getaData} value={'cricket'} checked={obj.hobbies?.includes('cricket')} /> cricket
        <input type="checkbox" name='hobbies' onChange={getaData} value={'football'} checked={obj.hobbies?.includes('football')} /> football
        <input type="checkbox" name='hobbies' onChange={getaData} value={'Tennis'} checked={obj.hobbies?.includes('Tennis')} /> Tennis <br />
        <button type='button' className='btn btn-success mt-2' onClick={saveData}>Save</button>
        </form>
        <table className='table'>
            <thead>
                <tr>
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
                                <td>{x.firstName}</td>
                                <td>{x.lastName}</td>
                                <td>{x.city}</td>
                                <td>{x.age}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobbies}</td>
                                <td>
                                  <button onClick={()=>editData(x._id)} className='btn btn-warning'>Edit</button>
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

export default ApiCrud