import React from 'react'

function Card(props) {
    return (
        <div className="col">
            <div className="card">
                <img src={props.data.image} className="card-img-top" alt="..." width={150} height={150} />
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <div className='d-flex justify-content-between' >
                        <p>price:- $ {props.data.price}</p>
                        <p>M.R.p.:-$ {props.data.mrp}</p>
                    </div>
                    <p>Discount:-{props.data.discount} %</p>
                    <p className="card-text">{props.data.discription}</p>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-success'>Add Cart</button>
                        <button className='btn btn-warning'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card