import React, { useContext } from 'react'
import useArrayObj from './useArrayObj'
import { dataContext } from '../App'

function CustomeComp() {
   const data = useContext(dataContext)
   console.log(data);
   
    const aray =[
        {
            name:'oscar',
            pin:'21452',
            phone:363435,
            addr:'surat'
        },
        {
            name:'Career',
            pin:'66',
            phone:555,
            state:"Bihar"
        },
        {
            name:'Point',
            pin:'5495',
            phone:55524875,
            city:'srinagar'
        }
    ]
    const namePinAry = useArrayObj(aray)
    // console.log(namePinAry);
    
  return (
    <div>CustomeComp</div>
  )
}

export default CustomeComp