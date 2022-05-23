import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./App.scss"
import Home from './screens/Home'
import Product from './screens/Products'
import Detail from './screens/Detail'
import Cart from './screens/Cart'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
  )
}
