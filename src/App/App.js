// import logo from './logo.svg';
import './App.css';
import Cart from '../Pages/Cart/Cart';
import Address from '../Pages/Address/Address';
import Home from '../Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
              {/* <Address/> */}
              <Routes>
                <Route path='/' element={<Home/>}/>
              
              </Routes>
    </div>
  );
}

export default App;
