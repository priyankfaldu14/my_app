import React from 'react'
import Childcomp2 from './Childcomp2'

function Childcomp1(props) {
    // console.log(props.data);
    let data = props.data
    
  return (
    <div>
        <h1>Childcomp1</h1>
        <Childcomp2 data={data}/>
    </div>
  )
}

export default Childcomp1