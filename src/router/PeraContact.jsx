import React from 'react'
import { Link } from 'react-router-dom'

function PeraContact() {
  return (
    <div>
         <h1>Contact</h1>
      <Link to={"/contact/contact1"}>Contact1</Link>
      <Link to={"/contact/contact2"}>Contact2</Link>
    </div>
  )
}

export default PeraContact