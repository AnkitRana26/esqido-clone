import React from "react";
// import { StarIcon } from "@chakra-ui/icons";
import './Reviews.css'
import Ratings from '../rating/Ratings'


export const Reviews = () => {
  return (
    <div className="mainReview">
      <h1 className="reviewsTitle">Reviews</h1>
      <p className="reviewSubHeading" style={{textAlign:"center"}}>Hear what people are saying about this product!</p>
    
    <div className="reviews">
          <div className="">
            <div className="logoContainer">
            <img className="logoImage" src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="logo" />
            <div>
            <h3>Hem Lata</h3>
            <p className="verified">Verified</p>
            </div>
            
            </div>
            
           
            <div>
            <Ratings data = {5}/>
            </div>
            <p>
              The Best This is the best eyelash glue I have tried, and I have tried
              a lot. I highly recommend it.
            </p>
          </div>
          <div className="">
            <div className="logoContainer">
            <img className="logoImage" src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="logo" />
            <div>
            <h3>Breda Martin</h3>
            <p className="verified">Verified</p>
            </div>
            
            </div>
            
           
            <div>
            <Ratings data = {4.5}/>
            </div>
            <p>
            Excellent
Is very comfortable
            </p>
          </div>
          <div className="">
            <div className="logoContainer">
            <img className="logoImage" src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="logo" />
            <div>
            <h3>Barbara C Branch</h3>
            <p className="verified">Verified</p>
            </div>
            
            </div>
            
           
            <div>
            <Ratings data = {5}/>
            </div>
            <p>
            Companion bag
It is nice & light & roomy.
            </p>
          </div>
          <div className="">
            <div className="logoContainer">
            <img className="logoImage" src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="logo" />
            <div>
            <h3>Flo Morcom</h3>
            <p className="verified">Verified</p>
            </div>
            
            </div>
            
           
            <div>
              <Ratings data = {4.5}/>
            </div>
            <p>
            Love it
Love the Companion Makeup Bag, everything fits in perfectly but the colour is a bit boring. Otherwise it is fabulous.
            </p>
          </div>
          <div className="">
            <div className="logoContainer">
            <img className="logoImage" src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="logo" />
            <div>
            <h3>Nenina Martinez</h3>
            <p className="verified">Verified</p>
            </div>
            
            </div>
            
           
            <div>
            <Ratings data = {5}/>
            </div>
            <p>
              The Best This is the best eyelash glue I have tried, and I have tried
              a lot. I highly recommend it.
            </p>
          </div>
          <div className="">
            <div className="logoContainer">
            <img className="logoImage" src="https://m.media-amazon.com/images/I/31Cd9UQp6eL._SX355_.jpg" alt="logo" />
            <div>
            <h3>Cristina Fabbrini</h3>
            <p className="verified">Verified</p>
            </div>
            
            </div>
            
           
            <div>
            <Ratings data = {4}/>
            </div>
            <p>
            Perfect, as usual
I have nothing more to add but: perfect. It is difficult to get back to normal eye pencil once you get used to this one… I’d rather say impossibile :)
            </p>
          </div>
    </div>
    </div>
  );
};
