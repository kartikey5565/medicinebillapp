import React from 'react'
import MedicinesContext from './MedicinesContext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const url ='https://crudcrud.com/api/df6277b243434e489d2211ea014c530c/medicines'
const MedicinesProvider = (props) => {

    const populateInitialData = async()=>{
        const data = await axios.get(url)
        setMedicines(data.data)
    }
    useEffect(()=>{
        populateInitialData()
    },[])
    const [medicines, setMedicines]= useState([])
    const addMedicine = (item)=>{
        setMedicines(pre=>{
            const newArr = [...pre]
            newArr.push(item)
            return newArr
        })
    }
    const removeMedicine = id=>{
        setMedicines(pre=>{
            
            const reqIndex = pre.findIndex(item=>item._id===id)
            if(reqIndex!==-1){
                const newArr = [...pre]
                newArr.splice(reqIndex,1)
                return newArr
            }
        })
    }
    const medicinesState = {
        items : medicines,
        addItem : addMedicine,
        removeItem : removeMedicine,
        url : url
    }
  return (
    <MedicinesContext.Provider value={medicinesState}>
        {props.children}
    </MedicinesContext.Provider>
  )
}

export default MedicinesProvider