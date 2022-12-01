// import logo from './logo.svg';
import './App.css';
import Cart from '../Pages/Cart/Cart';
import ProductDiscription from '../Pages/Product-Discription/ProductDiscription'
import { RatingAndReviews } from '../Components/Product-Discription/RatingAndReviews/RatingAndReviews';

function App() {
  return (
    <div className="App">
              {/* <Cart/> */}
              <ProductDiscription/>
              {/* <RatingAndReviews/> */}
    </div>
  );
}

export default App;