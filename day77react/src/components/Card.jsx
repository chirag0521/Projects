import React from 'react'

const Card = (props) => {

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

  return (
    <div style={{backgroundColor:`rgb(${r},${g},${b})`}} className='user-card'>
        <h2>{props.elem.name}</h2>
         <p>{props.elem.website}</p>
    </div>
  )
}

export default Card