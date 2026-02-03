import React from 'react'

const Navbar = (props) => {
    console.log(props);
    
  return (
    <div style = {{backgroundColor:props.color}} className = " text-2xl flex items-center justify-between text-white px-10 py-4 mb-1" >
        <h2>{props.title}</h2>
        <div className ="flex gap-8"> 
           {props.links.map(function(elem,idx){
            return <h4 className ="text-sm" key={idx}>{elem}</h4>
           })} 
             </div>
      
    </div>
  )
}

export default Navbar
