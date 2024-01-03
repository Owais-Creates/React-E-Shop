import React from 'react'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/product/id:' element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
