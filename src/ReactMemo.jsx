import React, { useState } from 'react'
import MemoChild from './components/MemoChild'

function ReactMemo() {
    const [count, setcount] = useState(0)
    const [data, setdata] = useState(100)
  return (
    <div>
        <h1>ReactMemo</h1>
        {/* <h2>Count:{count}</h2> */}
        <h3>data:{data}</h3>
        <MemoChild count={count}/>
        <button onClick={()=>setcount(count+1)}>Count</button>
        <button onClick={()=>setdata(data+1)}>Data</button>
    </div>
  )
}

export default ReactMemo