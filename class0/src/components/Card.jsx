import React from 'react'

const Card = (props) => {
    console.log(props); // here props acts as a object and it cant be used as a child
    
  return (
    <div className ='bg-white rounded m-2 w-fit px-5 py-3 '>
        { <h1 className ='text-4xl font-semibold'>{props.user}</h1>  /* we can use {props.user} */}
    </div>
  )
}

export default Card
