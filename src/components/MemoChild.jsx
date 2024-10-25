import React, { memo } from 'react'

function MemoChild(props) {
console.log("count",props.count);

  return (
    <div>MemoChild 
        <h5>count:{props.count}</h5>
    </div>
  )
}

export default memo(MemoChild)