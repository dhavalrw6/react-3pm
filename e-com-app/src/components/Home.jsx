import React, { useEffect, useState } from 'react'


function Home({ products, addToCart }) {



    return (
        <>
            <div className="container">
                <div className="row my-2">
                    {
                        products.map((product, index) => {
                            return (
                                <div className="col-3 my-2" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={product.url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.price}</p>
                                            <button 
                                                className="btn btn-primary"
                                                onClick={() => addToCart(product)} 
                                            >
                                                    AddToCart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home
