import React, { useState } from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

function StateFunction() {
    console.log('state outside');
    
const [count, setcount] = useState(0)
const [obj, setobj] = useState({name:'oscar'})
//    console.log(count);
   
const incrementHandle =()=>{
    setcount(count+1)
    console.log("inside click event",count);
}
const nameHandle=(name)=>{
    setobj({name:name})
}
  return (
    <div>StateFunction
        <h1>count {count}</h1>
        <h3 >{obj.name}</h3>
        <button onClick={()=>incrementHandle}>click</button>
        <button onClick={()=>nameHandle('name')}>name</button>
        <FaInstagramSquare color='red' size={30} className=''/>
        <HiCursorClick />
    </div>
  )
}

export default StateFunction