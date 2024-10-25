import React from 'react'
import useLocalStorage from './useLocalStorage';

function LocalStorage() {
const aray=[5445, 52454,5445]
const localstorage=useLocalStorage()
console.log(localstorage.getLocalStorage('aray'));

  return (
    <div>
        <h1>LocalStorage</h1>
        <button onClick={()=>localstorage.setLocalstortage('aray',aray)}>Click</button>
    </div>

  )
}

export default LocalStorage