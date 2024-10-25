import React from 'react'
import HOCRouter from './HOCRouter'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
  console.log(props);
  const navigate = useNavigate()

  const loginHandle=()=>{
    localStorage.setItem('login',true)
    props.setIsLogin(true)
    navigate('/')
  }
  
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginHandle} className='btn btn-primary'>Login</button>
    </div>
  )
}

export default HOCRouter(Login)