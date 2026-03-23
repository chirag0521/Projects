import React from 'react'
import { useState } from 'react'

const Navbar = (props) => {
    const [newTheme, setNewTheme] = useState('')
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme) // newTheme sent to app.jsx
            setNewTheme('')
        }}>
            <input value={newTheme} 
            onChange={(e)=>{
                setNewTheme(e.target.value)

            }} type="text" placeholder='Enter theme'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Navbar