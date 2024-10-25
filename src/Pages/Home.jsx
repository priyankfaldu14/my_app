import React from 'react'
import HOC from './HOC'

function Home(props) {
    console.log(props.name);
  return (
    <h1>{props.name}</h1>
  )
}

export default HOC(Home)