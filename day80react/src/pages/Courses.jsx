import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <div className='flex flex-nowrap gap-10 bg-red-500'>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
            <p className='shrink-0'>Sale is Live!!!</p>
        </div>

        <Outlet />

    </div>
  )
}

export default Courses