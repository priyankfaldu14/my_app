import React from 'react'

function useArrayObj(aray) {
  const filteraray = aray.map((x)=>{
   return { 
    oscar:x.name,
    pin:x.pin
  }
  })
  return filteraray
}

export default useArrayObj