import React, { useCallback, useState } from 'react'
import Button from './Button'

function PeraButton() {
    const [count, setcount] = useState(0)
    const [number,setNumber]=useState(100)

    const countHandle=useCallback(()=>{
        setcount(count+1)
    },[count])

    const numberHandle=useCallback(()=>{
        setNumber(number+1)
    },[number])
    
  return (
    <div>
        <div>PeraButton</div>
        <Button name={"count"} action={countHandle} />
        <Button name={"number"} action={numberHandle} />
    </div>
  )
}

export default PeraButton