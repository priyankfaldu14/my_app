import React from 'react'

function HOC(Component) {
const  NewComponent =(props)=>{
    console.log(props.name);
    
    return(
        <div className='row m-0'>
        <div className='col-3 bg-danger' style={{height:"100vh"}}>Sidebar</div>
        <div className='col-9 g-0'>
            <div className='bg-primary p-2 d-flex gap-2'>
                <div className="p-1 bg-light">Home</div>
                <div className="p-1 bg-light">About</div>
                <div className="p-1 bg-light">Contact</div>
            </div>
            <Component name={props.name}/>
        </div>
        <div>
            footer
        </div>
    </div>
    )
}
  return (
    NewComponent
  )
}

export default HOC