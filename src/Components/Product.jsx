import React from 'react'
import { items } from './Data'

function Product() {
    return (
        <>

            <div className="container my-4">
                <div className="row">

                    {items.map((items) => {
                        return (
                            <>
                                <div className="col-lg-4 my-4 text-center">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={items.imgSrc} className="card-img-top" alt="image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{items.title}</h5>
                                            <p className="card-text">{items.description}</p>
                                            <button className='btn btn-primary mx-3 '>{items.price}{" "}₹</button>
                                            <button className='btn btn-warning'>{items.price}</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default Product
