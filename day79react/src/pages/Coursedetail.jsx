import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetail = () => {
   const params =  useParams()

  return (
        <h1 className='text-5xl font-bold text-red-400 fixed underline  left-[50vw] -translate-x-1/2'>{params.id} course detail PAGE</h1>

  )
}

export default Coursedetail