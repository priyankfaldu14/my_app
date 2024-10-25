import React, { useContext } from 'react'
import { dataContext } from '../App';

function Childcomp3(props) {
    const data = useContext(dataContext)
    console.log(data);
    
    // console.log(props.data);
  return (
    <div>
        <h3>Childcomp3 </h3>
            <button onClick={()=>data.setdata(data.data+1)}>Click</button>
    </div>
  )
}

export default Childcomp3