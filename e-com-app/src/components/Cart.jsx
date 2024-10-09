import React from 'react'

function Cart({ cart, removeItemFromCart }) {
    return (
        <>
            <div className="container">
                {
                    cart.map((item, index) => (
                        <div class="card mb-3" style={{ width: '440px' }} key={index}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={item.url} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text fw-bolder">Rs. {item.price}</p>
                                        <button className='btn btn-outline-danger' onClick={() => removeItemFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart
