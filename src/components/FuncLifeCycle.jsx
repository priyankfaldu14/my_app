import React, { useEffect, useState } from 'react'

function FuncLifeCycle() {
    const [count, setcount] = useState(0)
    const [data, setdata] = useState(10)

    useEffect(() => {
      console.log('mounting');

    //   return()=>{
    //     console.log('unmount');
    //   }
    }, [])

    useEffect(() => {
        console.log('update');
        
        return()=>{
            console.log('unmount');
          }
    }, [count])
    
    
    console.log('FuncLifeCycle');
    
  return (
      <div>
        {console.log('render')}
        <h1>FuncLifeCycle</h1>
        <h2>Count:{count}</h2>
        <h2>data:{data}</h2>
        <button onClick={()=>setcount(count+1)}>Click</button>
        <button onClick={()=>setdata(data+1)}>data</button>
    </div>
  )
}

export default FuncLifeCycle