import React from "react";
import { useRef } from "react";
import './Navbar.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from "react";
import {NavLink, Link} from 'react-router-dom';
import Search from "./Search";
import Navsticky from "./Navsticky";


function Navbar(){

    let ref = useRef();
    const [state, setState] = useState(false);

    const closeSearch = ()=>{
        if(state)
        setState(false);
    }
    const searchPro = ()=>{
        setState(true);

    }
    


    return (
        <div className="navbar">
            
            <div id="mid" onClick={closeSearch}>
                <div>
                <p>Shipping</p>
                <p>Return Policy</p>
                <p>FAQ</p>
                <p>Lash Guide</p>
                <p>Contact Us</p>
                </div>
                
            </div>
            {/* <Navsticky/> */}
            {/* <div id="bottom">
                <div>
                    <Link to="/">
                        <img  src="https://cdn.shopify.com/s/files/1/0250/1519/files/esq-logo-110419_236x65_ca22d1fc-ae73-40f7-a98a-081cfc10b4f2_147x41.png?v=1634502882"/>
                    </Link>
                </div>
                <div id="navCont">
                    <ul>
                        <li><a href="#">SHOP</a>
                            <ul>
                                <li><Link to="#">Sumdge Free Eyeliner</Link></li>
                                <li><Link to="#">Companion Lash Glue</Link></li>
                                <li><Link to="/falselashes">False Lashes</Link></li>
                                <li><Link to="accessories">Accessories</Link></li>
                            </ul>
                        
                        </li>
                        <li><a href="#">OUR STORY</a></li>
                        <li><a href="#">REVIEWS</a></li>
                        <li><a href="#">REWARDS</a></li>
                    </ul>
                </div>
                <div>
                    {state && <Search/>}
                    <svg onClick={searchPro} class="icon-search " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">          <title>Search icon</title>        <path d="M19.5 21.5L13.6155 15.1628" stroke="currentColor" stroke-width="1.75"></path>      <circle cx="9.5" cy="9.5" r="7" stroke="currentColor" stroke-width="1.75"></circle>    </svg>
                    <Link to="/login">
                        <svg class="icon-account " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">          <title>Account icon</title>        <path d="M20.5 19.5V21.525C20.5 21.5802 20.4552 21.625 20.4 21.625H3.6C3.54477 21.625 3.5 21.5802 3.5 21.525V19.5C3.5 18.3728 3.94777 17.2918 4.7448 16.4948C5.54183 15.6978 6.62283 15.25 7.75 15.25H16.25C17.3772 15.25 18.4582 15.6978 19.2552 16.4948C20.0522 17.2918 20.5 18.3728 20.5 19.5Z" stroke="currentColor" stroke-width="1.75"></path>      <path d="M12 11C14.3472 11 16.25 9.09721 16.25 6.75C16.25 4.40279 14.3472 2.5 12 2.5C9.65279 2.5 7.75 4.40279 7.75 6.75C7.75 9.09721 9.65279 11 12 11Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"></path>    </svg>
                    </Link>
                    <Link to="/cart">
                        <svg class="icon-bag " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">          <title>Cart icon</title>        <path d="M1.75 6.75H17.25V21.75H1.75V6.75Z" stroke="currentColor" stroke-width="1.5"></path>      <path d="M13 10.5V5.5C13 2.83333 11.4444 1.5 9.5 1.5C7.55556 1.5 6 2.83333 6 5.5L6 10.5" stroke="currentColor" stroke-width="1.5"></path>    </svg>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar;