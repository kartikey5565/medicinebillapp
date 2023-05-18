import React from 'react'

const CartContext = React.createContext({
    items: [],
    total: 0,
    addItem: ()=>{},
    empty : ()=>{},
    url: ''
})

export default CartContext