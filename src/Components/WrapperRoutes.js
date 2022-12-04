import React from 'react'
import Footer from './Home/Footer'
import Navbar from './Home/Navbar'
import Navsticky from './Home/Navsticky'

const WrapperRoutes = ({children}) => {

  return <>
  <Navbar/>
  <Navsticky/>
  {children}
  <Footer/>
  </>
}

export default WrapperRoutes