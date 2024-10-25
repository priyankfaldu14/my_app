import React, { useState } from 'react'
import ChildProps from './ChildProps'

function PeraProps() {
    const [name, setname] = useState('wdwewe')
    
    const childtoperahandle=(data)=>{
        console.log(data);
        setname(data)
        
    }
  return (
    <div>
        <h1>PeraProps {name}</h1>
        <ChildProps name={name} func={childtoperahandle}/>
    </div>

  )
}

export default PeraProps