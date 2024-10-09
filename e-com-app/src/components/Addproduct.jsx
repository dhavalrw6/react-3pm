import React, { useState } from 'react'

function Addproduct({addProduct}) {
    let [product, setProduct] = useState({});

    let handleChnage = (e) => {
        let { name, value } = e.target;
        setProduct({ ...product, [name]: value });

    }

    let handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
    }

    return (
        <>
            <div className="container" >
                <form className="mt-3 w-50  mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            onChange={handleChnage}
                            name="title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            onChange={handleChnage}
                            name="price"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="url" className="form-label">Image Url</label>
                        <input
                            type="text"
                            className="form-control"
                            id="url"
                            onChange={handleChnage}
                            name="url"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Addproduct
