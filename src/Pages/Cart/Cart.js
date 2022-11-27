import { Container } from '@chakra-ui/react';
import React, { useState } from 'react'
import CartItem from '../../Components/Cart/CartItem';
import EmptyCart from '../../Components/Cart/EmptyCart';



const cartData=[
    {
        id:1,
        img:`https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-b_999x999.gif?v=1628635003`,
        name:`Companion Makeup Bag`,
        price:28,
        qty:1
    },
    {
        id:2,
        img:`https://cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-white-1_1101x1101.jpg?v=1641598386`,
        name:`Reusable Makeup Rounds (5 rounds)`,
        price:14.98,
        qty:1
    }
]


const Cart = () => {
    const [cart,setData] = useState(cartData);

  return (
    <div>
             <Container  w="70%" m="1% auto" >
                    {   
                        cart.length>0 ? <CartItem/>:<EmptyCart/>
                    }
            </Container>




    </div>
  )
}

export default Cart