import React, { useState } from 'react'

function EventComp() {
    console.log('event comp');
    const [value, setvalue] = useState(null)
    const getData =(e)=>{
        console.log(e.target.value);
        setvalue(e.target.value)
    }
  return (
    <div>
        <h1>EventComp</h1>
        <input type="text" onChange={getData}/>
        <h3>  value:- {value} </h3>
    </div>
  )
}

export default EventComp