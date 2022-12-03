import { Container, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import CartItem from '../../Components/Cart/CartItem';
import EmptyCart from '../../Components/Cart/EmptyCart';





const Cart = () => {
    
    const [cart,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        getData();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1300);
    },[])

    const getData =async()=>{
        let res = await fetch('https://esqido-data.onrender.com/cart');
        let data = await res.json();
        console.log(data);
        setData(data);
    }

  return (
    <div>
             <Container  w="80%" m="3% auto" >
                    {   
                        !loading ? <CartItem getData={getData} cartData={cart}/>:<Image  m={"auto"} display="block" src='https://media.baamboozle.com/uploads/images/1426/1667877941_225397_gif-url.gif'/> 
                    }
            </Container>
    </div>
  )
}

export default Cart