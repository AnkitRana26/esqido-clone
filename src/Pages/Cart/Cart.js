import { Container } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import CartItem from '../../Components/Cart/CartItem';
import EmptyCart from '../../Components/Cart/EmptyCart';





const Cart = () => {
    
    const [cart,setData] = useState([]);

    useEffect(()=>{
        getData();
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
                        cart.length>0 ? <CartItem getData={getData} cartData={cart}/>:<EmptyCart width={"100%"} />
                    }
            </Container>
    </div>
  )
}

export default Cart