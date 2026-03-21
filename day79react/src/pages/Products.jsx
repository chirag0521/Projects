import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold mb-5 text-red-400  underline'>PRODUCTS PAGE</h1>
            <div className='flex gap-4'>
                <Link className='text-2xl font-bold underline' to='/products/men'>Men collection</Link>
                <Link className='text-2xl font-bold underline' to='/products/women'>Women collection</Link>
            </div>

        </div>
    )
}

export default Products