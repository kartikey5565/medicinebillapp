import React, { useEffect } from 'react'
import { useState } from 'react'
import CartContext from './CartContext'
import axios from 'axios'

const url = 'https://crudcrud.com/api/df6277b243434e489d2211ea014c530c/cart'

const CartProvider = (props) => {
    const lodCartItems = async()=>{
        const data = await axios.get(url)
        setCartItems(data.data)
       
        const total = data.data.reduce((cur,item)=>{
            return cur+ Number(item.price)
        }, 0)
        setCartTotal(total)
    
    }

    useEffect(()=>{
        lodCartItems()
    },[])
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const addItem = (item)=>{
        setCartItems(pre=>{
            const newArr = [...pre]
            newArr.push(item)
            return newArr
        })

        setCartTotal(pre=>pre+Number(item.price))
    }

    const empty = ()=>{
        setCartItems([])
        setCartTotal(0)

    }



    const cartContext = {
        items : cartItems,
        total : cartTotal,
        addItem : addItem,
        empty : empty,
        url : url
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider