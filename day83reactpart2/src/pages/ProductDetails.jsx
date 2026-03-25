import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const productData = useContext(ProductDataContext) 
   
    const {productId} = useParams()
    
    let selectedProduct = ''
    if(productData.length > 0){
      selectedProduct = productData.find((elem)=> elem.id === Number(productId))
    }

    console.log(selectedProduct);
    
    
  return (
    <div>
        <img src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description}</p>
        <h5>{selectedProduct.price}</h5>
    </div>
  )
}

export default ProductDetails