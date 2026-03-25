import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
    const productData = useContext(ProductDataContext)

    let renderData = 'Loading'
    if(productData.length>0){
      renderData = productData.map(function(elem,idx){
        return <Link  className='product' key={idx} to={`/products/${elem.id}`} >
          <img src={elem.image} alt="" />
          <h2>{elem.title}</h2>
        </Link>
      })
    }

  return (
    <div className='allproduct'>
        {renderData}
    </div>
  )
}

export default Products