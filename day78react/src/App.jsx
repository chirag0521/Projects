import React, { useEffect, useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [counter, setCounter] = useState(0)
  useEffect(function(){
    console.log("Use effect is running"); 
  },)
  return (
    <div>
      <input value={title}
      onChange={(e)=>{
          settitle(e.target.value)
      }} type="text" /> 
      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Increase</button>
    </div>
  )
}

export default App