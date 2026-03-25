import React, { createContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/productApi'

 export const ProductDataContext = createContext()

const ProductContext = ({children}) => {
    const [productData, setProductData] = useState([])

    const setData= async()=>{
        const data  = await getAllProductData()
        setProductData(data)
        //or
        //setProductData(await getData())
    }

    useEffect(function(){
        setData()
    },[])
  return (
    <div>
        <ProductDataContext.Provider value={productData}>
            {children}
        </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext