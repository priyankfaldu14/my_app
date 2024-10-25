import React, { useState } from 'react'

function ConditionalRedender() {

const [show, setshow] = useState(true)

const showbtn =()=>{
    setshow(true)
}
const hidebtn =()=>{
    setshow(false)
}
const toggle =()=>{
    // if(show === true){
    //     setshow(false)
    // }else{
    //     setshow(true)
    // }
    setshow(!show)
    
    // jayvadadoriya01@gmail.com
}
  return (
    <div>
        {
            show?<h1>Conditional Render</h1>:''
        }
            {/* <button onClick={showbtn}>show</button>
            <button onClick={hidebtn}>Hide</button> */}
            <button onClick={toggle}>{show?"Hide":"Show"}</button>
    </div>
  )
}

export default ConditionalRedender