import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import ProductDiscription from '../../Pages/Product-Discription/ProductDiscription'
import Accessories from '../ProductPageComponents/Accessories'
import FalseLashesh from '../ProductPageComponents/FalseLashesh'
import Cart from '../../Pages/Cart/Cart'
import Login from '../Loginsignup/Login'
import Create from '../Loginsignup/Create'
import Address from '../../Pages/Address/Address'
import Payment from '../Payment/Payment'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/falselashes' element={<FalseLashesh/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/productdescription/:id' element={<ProductDiscription/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Create/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/payment' element={<Payment/>}/>

    </Routes>
  )
}

export default AllRoutes