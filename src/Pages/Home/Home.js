import React from "react";
import './Home.css';

function Home(){

    return (
        <div>
            <div id="first"> <img src="https://cdn.shopify.com/s/files/1/0250/1519/t/14/assets/esqholiday111522desktop-1668553327744.jpg?v=1668553329" /></div>
            <div className="tags">
                <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-130af71d--r29logo.png?v=1630948229"/>
                <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-70f0c6ab--ellelogo.png?v=1630948213"/>
                <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-53130af7--marieclairelogo.png?v=1630948225"/>
                <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-f0c6ab53--fashionmaglogo.png?v=1630948216"/>
                <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-ab53130a--huffpostlogo.png?v=1630948222"/>
                <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-c6ab5313--flarelogo.png?v=1630948219"/>
            </div>
            <div id="second">
                <div><h2>We created Esqido to be a new class of beauty.</h2></div>
                <div id="second_child">
                    <div className="beuty">
                        <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-f25e9c2d--fairprices.png?v=1630955015"/>
                        <h4>FAIR PRICES</h4>
                        <p>By selling directly to you from our factories, you get a high-end product at a great price.</p>
                    </div>
                    <div className="beuty">
                        <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-f25e9c2d--fairprices.png?v=1630955015"/>
                        <h4>FAIR PRICES</h4>
                        <p>By selling directly to you from our factories, you get a high-end product at a great price.</p>
                    </div>
                    <div className="beuty">
                        <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-f25e9c2d--fairprices.png?v=1630955015"/>
                        <h4>FAIR PRICES</h4>
                        <p>By selling directly to you from our factories, you get a high-end product at a great price.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;