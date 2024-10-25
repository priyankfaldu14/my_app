import React, { useEffect, useReducer, useState } from 'react'
import NavbarHOC from './NavbarHOC'
import { reducer } from './reducerApi'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function FormReducer() {
    const [obj, setobj] = useState({hobbies:[]})
    const [blankObj, setBlankObj] = useState({hobbies:[]})
    const [state, dispatch] = useReducer(reducer, [])
    const navigate =useNavigate()
    const params = useParams()
    console.log(params.id);

    
    useEffect(() => {
      if(params.id){
        axios.get("https://student-api.mycodelibraries.com/api/user/get-user-by-id?id="+params.id).then((res)=>{
            console.log(res.data.data.hobbies.split(','));
            
            setobj({...res.data.data,hobbies:res.data.data.hobbies.split(',')});
          })
      }
    }, [])
    

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
        } else if(e.target.type === 'file'){
            obj[e.target.name] = e.target.files[0]
            console.log(obj);
        }
        else {
          obj[e.target.name] = e.target.valueefe3fefer
          blankObj[e.target.name] = ''
        }
        setobj({...obj})
      }
      
      const saveData =()=>{
        const formData = new FormData()

        formData.append("firstName",obj.firstName)
        formData.append("lastName",obj.lastName)
        formData.append("age",obj.age)
        formData.append("hobbies",obj.hobbies)
        formData.append("gender",obj.gender)
        formData.append("city",obj.city)
        formData.append("userImage",obj.image)
        if(obj._id === undefined){
            dispatch({type:"ADD",formdata:formData})
        }else{
            formData.append("id",obj._id)
            dispatch({type:"UPDATE",formdata:formData})
        }
        setTimeout(()=>{
            navigate("/table")
        },[500])

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
        <label htmlFor="" className='d-block'>Profile</label>
        <input type="file" name='image' onChange={getaData}/> <br />
        <button type='button' className='btn btn-success mt-2' onClick={saveData}>Save</button>
        </form>
    </div>
  )
}

export default NavbarHOC(FormReducer)