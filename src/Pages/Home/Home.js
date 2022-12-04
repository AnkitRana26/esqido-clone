import React, { useState } from "react";
import './Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {details} from './data';
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import { style } from "@mui/system";
import Scroll2Top from "../../Components/Scroll2Top/Scroll2Top";

function Home(){
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
        <div id="check">
            {/* <Navbar/> */}
            <div id="first"> <img src="https://cdn.shopify.com/s/files/1/0250/1519/t/14/assets/esqholiday111522desktop-1668553327744.jpg?v=1668553329" /></div>
            <div className="tags">
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-130af71d--r29logo.png?v=1630948229"/>
                    <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-70f0c6ab--ellelogo.png?v=1630948213"/>
                    <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-53130af7--marieclairelogo.png?v=1630948225"/>
                    <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-f0c6ab53--fashionmaglogo.png?v=1630948216"/>
                    <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-ab53130a--huffpostlogo.png?v=1630948222"/>
                    <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-c6ab5313--flarelogo.png?v=1630948219"/>

                </div>
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
                        <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-73f25e9c--madewithintegrity.png?v=1630955012"/>
                        <h4>MADE WITH INTEGRITY</h4>
                        <p>We didn’t want to make anything we wouldn’t put on our own skin, that’s why our eyeliners are free of any parabens.</p>
                    </div>
                    <div className="beuty">
                        <img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-3d73f25e--happinessguarantee.png?v=1630955010"/>
                        <h4>HAPPINESS GUARANTEED</h4>
                        <p>We give you a full 60 days to make sure you absolutely love your Esqido eyeliner, guaranteed.</p>
                    </div>
                </div>
            </div>
            <div id="third">
                <div>
                    <p>EASY APPLICATION</p>
                    <h1>Oh so smooth.</h1>
                    <p>The Liner features a soft gel formula that glides effortlessly and evenly onto skin. This means no more tugging or pulling on the delicate eye area.</p>
                </div>
                <div><img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-72f02382--HomepageLinervideoeasyapplication.gif?v=1626027106"/></div>
            </div>
            <div id="fourth">
                <div><img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-08897d14--esqhomepagenomorepandaeyes.gif?v=1629930769"/></div>
                <div>
                    <p>WEAR IT UP TO 24 HOURS</p>
                    <h1>Long-wearing formula.</h1>
                    <p>Ever wish your eyeliner stayed on longer? Ours provide up to 24 hours of color, thanks to its long-wearing formula. The formula combats smudging and fading to ensure your line stays put all day without losing intensity.</p>
                </div>
            </div>
            <div id="fifth">
                <div>
                    <p>GREAT ON SENSITIVE SKIN</p>
                    <h1>Gentle and non-irritating.</h1>
                    <p>Free from unwanted additives such as paraben and formaldehyde, this liner is designed and formulated to leave you with beautiful eyes without irritation.</p>
                </div>
                <div><img src="https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-4a3b9102--esqhomepagegentleformula3.jpg?v=1627256774"/></div>
            </div>
            <div id="sixParent">
                <h1>Trusted by the Pros</h1>
                <h3>See why makeup artists around the world are raving about us.</h3>
                <div id="sixth">
                    <Slider {...settings}>
                    {details.map((item) => (
                        <div className="card">
                        <div className="card-top">
                            <div><img src={item.img}/></div>
                            <div>
                                <h3>{item.title}</h3>
                                <h4>{item.handle}</h4>
                                <h4>{item.prof}</h4>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                    ))}
                    </Slider>  
                </div>
            
            </div>
            <div id="last">
                <h1>Get the smooth and precise look, all day long.</h1>
                <h3>Shop the Gel Pencil Eyeliner</h3>
                <img src="https://cdn.shopify.com/s/files/1/0250/1519/t/14/assets/esqfranlinerblackcompressed-1635290028363.jpg?v=1635290029"/>
            </div>
            {/* <Footer/> */}\
            {visible?<Scroll2Top/>:""}
        </div>
    )
}

export default Home