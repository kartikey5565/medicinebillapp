import React from 'react'
import { Button, Table } from 'react-bootstrap'
import CartContext from './Context/CartContext'
import { useContext } from 'react'
import axios from 'axios'
const dummyItems = [{name: 'Paracetamol', quantity: 2, price: 3},{name: 'Something', quantity: 7, price: 42},{name: 'Dolo', quantity: 5, price: 13}]
const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const placeOrder = async()=>{
        if (cartCtx.items.length>0){
            const response = await axios.get(cartCtx.url)
            if (response.statusText==='OK'){
                const dataIds = response.data.map(item=>item._id)
                console.log(dataIds)
                dataIds.forEach(id => {
                    axios.delete(`${cartCtx.url}/${id}`)
                });
                cartCtx.empty()
                alert("Thanks for purchasing")
            }
           
        }
        else{
            alert("Your cart is empty. Add some medicines 😷")
        }
    }
    const clicked = e=>{
        if(e.target.id==='overlay'){
            props.toggle()
        }
    }
  return (
    <div id='overlay' onClick={clicked} style={{'backgroundColor': 'rgba(0,0,0,0.5)'}} className='w-100 h-100 position-fixed top-0'>
        <div id='cart' style={{'zIndex': 1}} className='w-50 bg-black text-white mx-auto my-5 p-2 zindex-modal'>
            <Button variant='danger' size='sm' onClick={()=>{props.toggle()}}>X</Button>
            <Table className='text-white'>
                <thead>
                    <tr className='text-center'>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                    <tbody>
                        {cartCtx.items.map(item=><tr key={item._id} className='text-center'>
                            <td className='text-center'>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                        </tr>)}
                    </tbody>

            </Table>
          
                <h2>Total : {cartCtx.total}</h2>
                   <div className='text-center'>
                   <Button className='text-center m-3' onClick={placeOrder}>Place Order</Button>
                   </div>
               
                 
           
            
            
        </div>
        
    </div>
  )
}

export default Cart