import React, { useEffect, useRef } from 'react'

function Useref() {
    const h1Ref = useRef(null)
    const inptRef = useRef(null)
    
    const clickHandle=()=>{
        // console.log(h1Ref.current.value);
        // h1Ref.current.innerHTML='oscar'
        console.log(inptRef.current.value);
        inptRef.current.value="OSCAR"
    }
  return (
    <div>
        <h1 ref={h1Ref}>
            Useref
        </h1>
        <input type="text" ref={inptRef}/>
        <button onClick={clickHandle}>Click</button>
    </div>
  )
}

export default Useref