import React, { useReducer } from 'react'
import { counterReducer } from './reducer'

function ReducerComp() {

    const [state, dispatch] = useReducer(counterReducer,[])
    console.log(state);
    
  return (
    <div>
        <h5>Count {JSON.stringify(state)} </h5>
        <button onClick={()=>dispatch({type:"ADD",obj:{name:'oscar'}})}>Add</button>
        <button onClick={()=>dispatch({type:"DELETE",id:1})}>Delete</button>
        <button onClick={()=>dispatch({type:"EDIT",id:2,obj:{name:"career",con:5585}})}>Edit</button>
    </div>
  )
}

export default ReducerComp