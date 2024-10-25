import React, { memo } from 'react'

function Button(props) {
    console.log('button',props.name);    
    
  return (
    <button onClick={props.action}>{props.name}</button>
  )

}

export default memo(Button)