import React from 'react'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

function NavbarHOC(Component) {
    const NewComponent =()=>{
       const params = useParams()
       const navigate= useNavigate()
    return (
        <>
            <div className='d-flex gap-2 bg-warning w-100 p-2 link'>
            <div className='bg-light p-2'><NavLink to={'/'}>Form</NavLink></div>
            <div className='bg-light p-2'><NavLink to={'/table'}>Table</NavLink></div>
           
            </div>
            <Component />
            
        </>

    )
}
return NewComponent
}

export default NavbarHOC