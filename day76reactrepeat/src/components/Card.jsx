import React from 'react'

const Card = (props) => {
    return (
        <div className='w-[20vw] bg-white text-black flex flex-col items-center rounded-xl px-8 py-8 text-center'>
            <img className='h-24 w-24 rounded-full object-center object-cover mb-2' src={props.elem.imageURL} alt="" />
            <h1 className='font-semibold text-2xl mt-2'>{props.elem.username}</h1>
            <h4 className='italic font-semibold text-lg text-red-400 m-2' >{props.elem.userRole}</h4>
            <p className='font-bold text-sm leading-tight text-center'>{props.elem.userDesc}</p>
            <button onClick={() => {
                props.deleteHandler(props.idx)
            }}
                className='bg-red-600 px-3 py-1 text-xs mt-4 text-white font-semibold rounded active:scale-96 cursor-pointer'>Remove</button>
        </div>
    )
}

export default Card