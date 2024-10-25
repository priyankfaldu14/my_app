import React from 'react'
import HOCRouter from './HOCRouter'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
      {/* <h1>Contact</h1> */}
      <Outlet/>
    </div>
  )
}

export default HOCRouter(Contact)