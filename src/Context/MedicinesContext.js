import React from "react";

const MedicinesContext = React.createContext({
    items: [],
    addItem : (item)=>{},
    removeItem: (id)=>{},
    url: ''
})

export default MedicinesContext