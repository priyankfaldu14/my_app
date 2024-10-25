import React, { useMemo, useRef, useState } from 'react'
import validateJson from './validate.json'

function Crud() {
  
  const [obj, setObj] = useState({
    name:'',
    email:'',
    gender:'',
    password:'',
    conpassword:'',
    date:'',
    phone:'',
    hobbies:[],
    profile:''
  })
  const [blankObj, setBlankObj] = useState({})
  const [filterObj, setfilterObj] = useState({name:'',email:''})
  const [aray, setAray] = useState( JSON.parse(localStorage.getItem('aray'))||[] )
  let [id, setId] = useState(  JSON.parse(localStorage.getItem('id'))||0)
  const [errMsg, setErrMsg] = useState({})
  const[filterAray,setFilterAray]=useState([])


  const getaData = async (e) => {
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
    } else if (e.target.type === 'file') {
      obj[e.target.name] = await toBase64(e.target.files[0])
    }
    else {
      obj[e.target.name] = e.target.value
      blankObj[e.target.name] = ''
    }
    // console.log(blankObj);
    setBlankObj({ ...blankObj })
    setErrMsg({...errMsg})
    console.log(errMsg);
    errFucn(e.target.name)
  }
  
  const errFucn = (key) => {   
    const currentDate = new Date()
    const above18 = currentDate.setFullYear((currentDate.getFullYear() - 18)); 
    const jsonObj = validateJson.find((x)=>x.name ===key)
    console.log(jsonObj);
    const checkCondition = jsonObj?.conditions.find((x)=>eval(x.condition))    
    if(checkCondition){
      if(checkCondition.otherField){
        errMsg[checkCondition.otherField]=checkCondition.error
      }else{
        errMsg[jsonObj.name]=checkCondition.error
      }
      console.log(checkCondition.error);
    }else{
      errMsg[jsonObj?.name]=''
    }
    console.log(errMsg);
    setErrMsg({...errMsg})
  }

  const tabledata = useMemo(()=>{
    return <table className='table'>
    {console.log('table')
    }
    <thead>
      <tr>
        <th>Id</th>
        <th>Profile</th>
        <th>Name</th>
        <th>Phone</th>
        <th>email</th>
        <th>password</th>
        <th>Date</th>
        <th>gender</th>
        <th>hobbies</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        aray.map((x, i) => {
          return (
            <tr key={i}>
              <td>{x.id}</td>
              <td>
                <img src={x.profile} alt="" width={50} height={50} />
              </td>
              <td>{x.name}</td>
              <td>{x.phone}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
              <td>{x.date}</td>
              <td>{x.gender}</td>
              <td>{x.hobbies?.join(',')}</td>
              <td>
                <button className='btn btn-warning me-1' onClick={() => editData(x.id)} >Edit</button>
                <button className='btn btn-danger' onClick={() => deleteData(x.id)}>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
  },[aray])

  const saveData = () => {
    for(let key in obj){
      errFucn(key)
    }
    if(Object.values(errMsg).every(x => x== '')){
      if (obj.id === undefined) {
        setObj({ ...obj })
        id++
        obj.id = id
        setId(id)
        localStorage.setItem('id',JSON.stringify(id))
        aray.push(obj)
        filterAray.push(obj)
        console.log(filterAray);
        localStorage.setItem('aray',JSON.stringify(aray))
        console.log(aray);
      } else {
        let index = aray.findIndex((x) => x.id === obj.id)
        aray.splice(index, 1, obj)
      }
      setAray([...aray])
      setFilterAray([...filterAray])
      setObj({ ...blankObj })
    }
  }

  const editData = (id) => {
    console.log(id);
    const editObj = aray.find((x) => x.id === id)
    console.log(editObj);
    setObj({ ...editObj })
  }

  const deleteData = (id) => {
    let index = aray.findIndex((x) => x.id === id)
    aray.splice(index, 1)
    console.log(aray)
    setAray([...aray])
    localStorage.setItem('aray',JSON.stringify(aray))
  }

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  const filterData = (e)=>{
    filterObj[e.target.name]=e.target.value
    console.log(filterAray);
    
    setfilterObj({...filterObj})
    const newAray = JSON.parse(localStorage.getItem('aray')).filter((x)=>x.name.toLowerCase().includes(filterObj.name?.toLowerCase()) && x.email.toLowerCase().includes(filterObj.email?.toLowerCase()))
    console.log(newAray);
    setAray([...newAray]);
    console.log(aray);
    
    if(Object.values(filterObj).every((x)=>x === '')){
      setAray([...JSON.parse(localStorage.getItem('aray'))])
    }
  }

  return (

    <>
    <div className='w-50 my-2 mx-auto d-flex justify-content-between' >
      <input type="text" placeholder='enter name' name ='name' onChange={filterData}/>
      <input type="text" placeholder='enter email' name='email' onChange={filterData}/> 
    </div>
      <form action="" className='w-50 mx-auto shadow-lg p-3'>
        <label htmlFor="" className='d-block'>Name</label>
        <input type="text" className='w-100' name='name' value={obj.name} onChange={getaData} />
        <span className='text-danger' >{errMsg.name}</span>
        <label htmlFor="" className='d-block'>Phone no.</label>
        <input type="number" className='w-100' name='phone' onChange={getaData} value={obj.phone} />
        <span className='text-danger' >{errMsg.phone}</span>
        <label htmlFor="" className='d-block'>Password</label>
        <input type="password" className='w-100' name='password' onChange={getaData} value={obj.password} />
        <span className='text-danger d-block' >{errMsg.password}</span>
        <label htmlFor="" className='d-block'>Confirm Password</label>
        <input type="password" className='w-100' name='conpassword' onChange={getaData} value={obj.conpassword} />
        <span className='text-danger d-block' >{errMsg.conpassword}</span>
        <label htmlFor="" className='d-block'>D.O.B</label>
        <input type="date" className='w-100' name='date' onChange={getaData} value={obj.date} />
        <span className='text-danger' >{errMsg.date}</span>
        <label htmlFor="" className='d-block'>Email</label>
        <input type="email" className='w-100' name='email' onChange={getaData} value={obj.email} />
        <span className='text-danger' >{errMsg.email}</span>
        <br />
        <label htmlFor="" className='d-block'>Gender</label>
        <input type="radio" name='gender' onChange={getaData} checked={obj.gender === 'male'} value={'male'} /> Male
        <input type="radio" name='gender' onChange={getaData} value={'female'} checked={obj.gender === 'female'} /> Female <br />
        <span className='text-danger d-block' >{errMsg.gender}</span>
        <label htmlFor="" className='d-block'>Hobbies</label>
        <input type="checkbox" name='hobbies' onChange={getaData} value={'cricket'} checked={obj.hobbies?.includes('cricket')} /> cricket
        <input type="checkbox" name='hobbies' onChange={getaData} value={'football'} checked={obj.hobbies?.includes('football')} /> football
        <input type="checkbox" name='hobbies' onChange={getaData} value={'Tennis'} checked={obj.hobbies?.includes('Tennis')} /> Tennis
        <input type="checkbox" name='hobbies' onChange={getaData} value={'Hockey'} checked={obj.hobbies?.includes('Hockey')} /> Hockey
        <input type="checkbox" name='hobbies' onChange={getaData} value={'baseball'} checked={obj.hobbies?.includes('baseball')} /> baseball <br />
        <span className='text-danger d-block' >{errMsg.hobbies}</span>
        <label htmlFor="" className='d-block'>Profile</label>
        <input type="file" onChange={getaData} name='profile' /><br />
        <span className='text-danger d-block' >{errMsg.profile}</span>
        <button type='button' className='btn btn-success mt-2' onClick={saveData}>Save</button>
      </form>
      {tabledata}
    </>

  )
}

export default Crud