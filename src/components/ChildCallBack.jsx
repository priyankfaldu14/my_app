import React, { memo } from 'react'

function ChildCallBack(props) {
    console.log('props',props.renderChild());
    
  return (
    <div>ChildCallBack{props.renderChild()}</div>
  )
}

export default memo(ChildCallBack)