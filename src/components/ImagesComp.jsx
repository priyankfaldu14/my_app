import React from 'react'
import img from "../assets/images/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp"

function ImagesComp() {
  return (
    <div>
        <img src={img} alt="" width={200}/> <br />
        <img src={require('../assets/images/images (1).jfif')} alt="" />
        <img src="logo192.png" alt="" />
        <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" alt="" />
    </div>
  )
}

export default ImagesComp