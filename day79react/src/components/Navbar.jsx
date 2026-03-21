import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-pink-700 mb-10'>
        <h2>Navbar</h2>
        <div className='flex gap-8'>
            <Link to='/'>Home Page</Link>
            <Link to='/about'>About page</Link>
            <Link to='/products'>Product page</Link>
            <Link to='/courses'>Courses</Link>
            {/* <a href="/">Home page</a>
            <a href="/about">About page</a>
            <a href="/products">Product page</a>  */}
        </div>
    </div>
  )
}

export default Navbar