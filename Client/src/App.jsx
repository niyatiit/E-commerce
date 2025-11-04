import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Login from './pages/Login'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Contect from './pages/Contect'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <main className='w-screen h-screen'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/contact' element={<Contect/>}></Route>
      </Routes>
      <Footer/>
    </main>
  )
}

export default App