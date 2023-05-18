import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import MedicinesContext from './Context/MedicinesContext';
import CartContext from './Context/CartContext';
import axios from 'axios'
const Medicines = () => {
    const cartCtx = useContext(CartContext)
    const medicinesCtx = useContext(MedicinesContext)
  const addItem = async(item)=>{
    const newItem = {
      name: item.name,
      price : item.price,
      quantity : 1
    }
 
    const serverItem = await axios.post(cartCtx.url, newItem)
    
    if (serverItem&& serverItem.data){
      cartCtx.addItem(serverItem.data)
      console.log(serverItem.data)
    }
  }
  const removeItem = id=>{
    console.log(id)
    axios.delete(`${medicinesCtx.url}/${id}`)
    .then((res)=>{
      if (res.statusText==='OK'){
        medicinesCtx.removeItem(id)
        console.log('removed')
      }
      
    })
  }

  return (
    <>
         <Table bordered hover size="sm">
            <thead className='text-center'>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Remove Medicine</th>
                </tr>
            </thead>
      <tbody className='text-center'>
        {medicinesCtx.items.map(item=>  
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>{item.desc}</td>
          <td>{item.price}</td>
          <td><Button onClick={()=>{addItem(item)}}>Buy</Button></td>
          <td><Button onClick={()=>{removeItem(item._id)}} variant='danger'>X</Button></td>
          
        </tr>)} 
       
      </tbody>
    </Table>
    
    </>
  )
}

export default Medicines