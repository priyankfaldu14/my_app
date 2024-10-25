import React from 'react'
import HOCRouter from './HOCRouter'
import { Link, useParams } from 'react-router-dom'

function About() {
  const params = useParams()
  console.log(params);
  
  return (
    <div>
      <h1>About</h1>
      <div className='bg-light p-2'><Link to={'/about/oscar'}>Dynamic Link</Link></div>
      <h5>{params.id}</h5>
    </div>
  )
}

export default HOCRouter(About)