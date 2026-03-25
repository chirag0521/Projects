import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Sections = () => {
    const data =  useContext(UserDataContext)
  return (
    <div className='h-120 w-full bg-emerald-400'>
        <h1>All sections {data}</h1>
    </div>
  )
}

export default Sections