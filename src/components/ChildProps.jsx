import React, { useState } from 'react'

function ChildProps(props) {
    const [data, setdata] = useState(52)
    console.log(props);
    const clickHandle=()=>{
        props.func(data)
    }
  return (
    <>
        <div>ChildProps</div>
        <button onClick={clickHandle}>Click</button>
    </>
  )
}

export default ChildProps