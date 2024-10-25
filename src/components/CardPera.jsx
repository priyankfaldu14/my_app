import React from 'react'
import Card from './Card'

function CardPera() {
    console.log('card comp');
    
    const data = [
        {
            name: "Jeans",
            price: 500,
            mrp: 740,
            discount: 20,
            discription: "ome quick example text to build on the card title and make up the bulk of the card's content.",
            image: require("../assets/images/beautiful-nature-mountain-scenery-with-flowers-free-photo.webp")
        },
        {
            name: "Shirt",
            price: 200,
            mrp: 640,
            discount: 50,
            image: require("../assets/images/images (1).jfif"),
            discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, cumque!",
        },
        {
            name: "Laptop",
            price: 2200,
            mrp: 1640,
            discount: 50,
            image: require("../assets/images/images (2).jfif"),
            discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, cumque!",
        },
        {
            name: "Pc",
            price: 200,
            mrp: 140,
            discount: 10,
            image: require("../assets/images/images.jfif"),
            discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, cumque!",
        },
        {
            name: "Pc",
            price: 200,
            mrp: 140,
            discount: 10,
            image: require("../assets/images/images.jfif"),
            discription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, cumque!",
        },
    ]
    return (
        <div className="row row-cols-3 p-0 m-0 g-3">
            {
                data.map((x, i) => {
                    return (
                        <Card data={x} key={i}/>
                    )
                })
            }
        </div>
    )
}

export default CardPera