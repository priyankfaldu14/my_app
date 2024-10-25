import React, { useContext } from 'react'
import Childcomp3 from './Childcomp3'
import { dataContext } from '../App'
      
function Childcomp2(props) {

    // console.log(props.data);

    let count =useContext(dataContext)

    console.log(count.aray);

  return (
    <div>
        <h2>Childcomp2 {count.data}</h2>
        <Childcomp3 />
    </div>
  )
}

export default Childcomp2