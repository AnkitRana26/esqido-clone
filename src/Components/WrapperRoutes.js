import React from 'react'
import Banner from './Home/Banner'
import Footer from './Home/Footer'
import Navbar from './Home/Navbar'
import Navsticky from './Home/Navsticky'

const WrapperRoutes = ({children}) => {

  return <>
  <Banner/>
  <Navbar/>
  <Navsticky/>
  {children}
  <Footer/>
  </>
}

export default WrapperRoutes