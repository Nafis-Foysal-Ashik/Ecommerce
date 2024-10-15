import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Collecttion from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/> 
       {/* //outside the routes because it will be displayed in the all pages */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collecttion/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={< PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App