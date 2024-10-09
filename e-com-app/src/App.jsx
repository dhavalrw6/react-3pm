import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Addproduct from './components/Addproduct';
import axios from 'axios';
import Cart from './components/Cart';



function App() {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);


  useEffect(() => {
    getProduct();
    getCart();
  }, [])

  let addProduct = async (product) => {
    try {
      await axios.post(`http://localhost:3000/products`, product);
    } catch (error) {
      console.error(error);
    }
    getProduct();
  }

  let getProduct = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/products`);
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  let addToCart = async (product) => {
    try {
      await axios.post(`http://localhost:3000/cart`, product)
    } catch (error) {
      console.error(error);
    }
    getCart();
  }

  let getCart = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/cart`)
      setCart(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  let removeItemFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`)
    } catch (error) {
      console.error(error);
    }
    getCart();
  }

  return (
    <>
      <BrowserRouter>
        <Navbar count={cart.length} />
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/addProduct" element={<Addproduct addProduct={addProduct} />} />
          <Route path="/cart" element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
