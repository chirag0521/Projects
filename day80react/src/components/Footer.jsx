import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate =  useNavigate()
  return (
    <div className='flex absolute bottom-0 w-screen items-center justify-between p-5 bg-purple-800'>
        <h2 className='font-bold'>Footer</h2>
        <button onClick={()=>{
            navigate('/courses')
        }} className='px-4 py-2 border-2  bg-emerald-400'>Explore courses</button>
    </div>
  )
}

export default Footer