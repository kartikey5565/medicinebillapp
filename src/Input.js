import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import MedicinesContext from "./Context/MedicinesContext";
import axios from 'axios'
const Input = () => {
  const medicinesCtx = useContext(MedicinesContext)
  const name = useRef()
  const desc = useRef()
  const price = useRef()
  const addItem = async()=>{
    const item = {
      name : name.current.value,
      desc : desc.current.value,
      price : price.current.value,
    }

    const serverItem = await axios.post(medicinesCtx.url, item)

      if (serverItem&& serverItem.data){
        medicinesCtx.addItem(serverItem.data)
        console.log(serverItem)
      }
    
    
  }
  return (
    <>
      <Table size="lg" className="my-2 m-1" striped bordered hover>
        <tbody>
          <tr>
            <td>
              <Form.Label htmlFor="name">Medicine Name</Form.Label>
              <Form.Control
                ref={name}
                type="text"
                id="name"
                aria-describedby="passwordHelpBlock"
              />
            </td>
            <td>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                ref={desc}
                type="text"
                id="description"
                aria-describedby="passwordHelpBlock"
              />
            </td>
            <td className="">
              <Form.Label htmlFor="price">Price</Form.Label>
              <Form.Control
              ref={price}
                type="number"
                id="price"
                aria-describedby="passwordHelpBlock"
              />
            </td>

            <td className="align-middle">
                <Button onClick={addItem} className="text-center mx-auto" variant="success">Add</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Input;
