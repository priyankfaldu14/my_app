import React, { useState } from 'react'
import ChildComp from './ChildComp'
import ChildToPera from './ChildToPera';

function PeraComp() {

  const [data, setData] = useState(null)
  
   const sendData=(count)=>{
    console.log(count);
    setData(count)
   }

  return (
    <div>
        <h1>PeraComp {data}</h1>
        <ChildToPera sendData={sendData}/>
    </div>
  )
}

export default PeraComp