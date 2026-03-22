import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-3xl  flex justify-between font-semibold bg-amber-400 px-8 py-4'>
        <div>
            <h1>Navbar</h1>
        </div>
        <div className='text-2xl font-semibold flex gap-4'>
            
            <NavLink to='/'
            className={({isActive})=>
                isActive ? "text-red-700 underline" : "text-white"
            }>Home</NavLink>
            <NavLink to='/about'
            className={({isActive})=>
                isActive ?"text-red-700 underline" :"text-white"
            }>About</NavLink>
            <NavLink to='/courses'
            className={({isActive})=>{
                return isActive ?"text-red-700 underline" :"text-white"
            }}>Courses</NavLink>
        </div>
    </div>
  )
}

export default Navbar