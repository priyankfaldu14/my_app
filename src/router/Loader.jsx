import React from 'react'

function Loader() {
    return (
        <div className='justify-content-center align-items-center position-fixed top-0 start-0 w-100 z-3 loader' style={{height:"100vh"}}>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader