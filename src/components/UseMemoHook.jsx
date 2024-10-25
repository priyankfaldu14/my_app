import React, { useMemo, useState } from 'react'

function UseMemoHook() {
    const [count, setcount] = useState(0)
    const [data, setdata] = useState(100)

    // const countRender =()=>{
    //     console.log(count);    
    //     return <h4>{count}</h4>
    // }

    const countRender = useMemo(()=>{
        console.log(count);    
    },[count])

  return (
    <div>
        {countRender}   
        <h1>Use memo hook</h1>
        {/* <h2>Count:{count}</h2> */}
        <h3>Data :{data}</h3>
        <button onClick={()=>setcount(count+1)}>Count</button>
        <button onClick={()=>setdata(data+1)}>Data</button>
    </div>
  )
}

export default UseMemoHook