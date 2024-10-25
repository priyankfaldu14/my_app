import React, { useState } from 'react'

function ChildToPera(props) {
    
    console.log(props);
    
    const [count, setcount] = useState(0)
    const data=()=>{
        setcount(count+1)
        props.sendData(count)
    }
  return (
    <div>
        <h1>ChildToPera</h1>
        <button onClick={data}>click</button>
    </div>
  )
}

export default ChildToPera