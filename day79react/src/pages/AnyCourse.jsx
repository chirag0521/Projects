import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const params = useParams()
    console.log(params);
    

  return (
        <h1 className=' capitalize text-5xl font-bold text-red-400 fixed underline  whitespace-nowrap left-[50vw] -translate-x-1/2'>{params.id} Any course</h1>

  )
}

export default AnyCourse