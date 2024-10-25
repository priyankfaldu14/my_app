import React, { useCallback, useState } from 'react'
import ChildCallBack from './ChildCallBack'

function PeraCallback() {
    const [count, setcount] = useState(0)
    const [number,setNumber]=useState(100)
    const renderChild =useCallback(()=>{
            return count
    },[count])
  return (
    <div>
        <h1>PeraCallback{count}</h1>
        <h5>number:{number}</h5>
        <button onClick={()=>setcount(count+1)}>Count</button>
        <button onClick={()=>setNumber(number+1)}>Number</button>
        <ChildCallBack renderChild={renderChild}/>
    </div>
  )
}

export default PeraCallback