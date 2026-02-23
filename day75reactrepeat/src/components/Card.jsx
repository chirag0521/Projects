import React from 'react'

const Card = (props) => {
  return (
<div key={props.idx} className='w-[20vw] flex flex-col items-center rounded-xl py-8 px-8 text-center bg-white text-black'>
        <img className='h-24 w-24 object-cover object-center rounded-full' src={props.elem.imageURL} alt="" />
        <h1 className='text-2xl font-semibold mt-2'>{props.elem.username}</h1>
        <h5 className='text-lg text-blue-500 font-semibold my-3'>{props.elem.userrole}</h5>
        <p className='text-sm font-medium leading-tight'>{props.elem.userDes} </p>
        <button onClick={()=>{
          props.deleteHandler(props.idx)
        }} className='text-xs px-4 py-1 rounded bg-red-600 text-white font-semibold mt-4 cursor-pointer active:scale-95'>Remove</button>
    </div>
  )
}

export default Card