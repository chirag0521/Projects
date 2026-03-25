import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Section2 = () => {

  const data =  useContext(ThemeDataContext)

  return (
    <div>
      <h2>Section2</h2>
      <p>{data}</p>
    </div>
  )
}

export default Section2