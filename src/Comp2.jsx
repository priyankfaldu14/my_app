import React from 'react'
import './assets/css/style2.css'
import xyz from './assets/css/Comp2.module.css'

export  function Comp2() {
  const style={
    color:"orange",
    fontWeight:"bolder",
    fontSize:"30px"
  }
  return (
    <div className={xyz.pera} style={style}>Comp2</div>
  )
}
