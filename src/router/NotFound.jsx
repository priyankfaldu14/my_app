import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <div className='' >
        <p>Page not Found</p>
        <Link to={'/'}>
        <button>Back to home</button>
        </Link>
    </div>
  )
}

export default NotFound