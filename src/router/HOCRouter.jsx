import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function HOCRouter(Component) {
  const NewComponent = (props) => {
    const navigate = useNavigate()
    
    console.log(props);

    const logoutHandle =()=>{
      props.setisLogin(false)
      localStorage.removeItem('login')
      navigate('/')
    }

    const location =  useLocation()
    console.log(location);
    
    return (
      <div>
        <div className='d-flex gap-2 bg-warning w-100 p-2 link'>
          {
            props.isLogin ?
              <>
                <div className={`bg-light p-2  ${location.pathname === '/home'?"gameee":''}`}><Link to={'/'}>Home</Link></div>
                <div className={`bg-light p-2  ${location.pathname === '/about'?"ejfhej":''}`}><Link to={'/about'}>About</Link></div>
                <div className={` p-2  ${location.pathname === '/contact'?"bg-info":'bg-light'}`}><Link to={'/contact'}>Contact</Link></div>
                <button onClick={logoutHandle} className='bg-light p-2'><Link to={'/login'}>Logout</Link></button>
              </> : <div className={`bg-light p-2  ${location.pathname === '/login'?"gameee":''}`}><Link to={'/login'}>Login</Link></div>
          }


        </div>
        <Component setIsLogin={props.setisLogin} />
      </div>
    )
  }
  return (
    NewComponent
  )
}

export default HOCRouter