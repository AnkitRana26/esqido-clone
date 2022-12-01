// import logo from './logo.svg';
import './App.css';
import Cart from '../Pages/Cart/Cart';
import ProductDiscription from '../Pages/Product-Discription/ProductDiscription'
import { RatingAndReviews } from '../Components/Product-Discription/RatingAndReviews/RatingAndReviews';
import FalseLashesh from '../Components/ProductPageComponents/FalseLashesh';
import { Home } from '../Pages/Home/Home';
import Accessories from "../Components/ProductPageComponents/Accessories"

function App() {
  return (
    <div className="App">
              {/* <Cart/> */}
              <Home/>
              {/* <FalseLashesh/> */}
              {/* <Accessories /> */}
              
    </div>
  );
}

export default App;