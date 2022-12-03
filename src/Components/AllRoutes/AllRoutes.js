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
import Payment from '../../Pages/Payment/Payment'
import WrapperRoutes from '../WrapperRoutes'
import NotFound from '../../Pages/NotFound/NotFound'
import CompletePayment from '../CompletePayment/CompletePayment'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<WrapperRoutes><Home/></WrapperRoutes>}/>
        <Route path='/falselashes' element={<WrapperRoutes><FalseLashesh/></WrapperRoutes>}/>
        <Route path='/accessories' element={<WrapperRoutes><Accessories/></WrapperRoutes>}/>
        <Route path='/productdescription/:id' element={<WrapperRoutes><ProductDiscription/></WrapperRoutes>}/>
        <Route path='/cart' element={<WrapperRoutes><Cart/></WrapperRoutes>}/>
        <Route path='/login' element={<WrapperRoutes><Login/></WrapperRoutes>}/>
        <Route path='/register' element={<WrapperRoutes><Create/></WrapperRoutes>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/otp' element={<CompletePayment/>}/>
        <Route path='*' element={<WrapperRoutes><NotFound/></WrapperRoutes>}/>
        

    </Routes>
  )
}

export default AllRoutes