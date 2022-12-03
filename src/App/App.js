// import logo from './logo.svg';
import './App.css';
import Cart from '../Pages/Cart/Cart';
import Address from '../Pages/Address/Address';
import Home from '../Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import AllRoutes from '../Components/AllRoutes/AllRoutes';
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Home/Footer';

function App() {
  return (
    <div className="App">
              <Navbar/>
              <AllRoutes/>
              {/* <Footer/> */}
    </div>
  );
}

export default App;