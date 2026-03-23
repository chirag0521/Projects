import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  const changeTheme = (newTheme)=>{ // newtheme received from navbar
    setTheme(newTheme)
  }

  return (
    <div>
      <h1>The theme is {theme}</h1>
      <Navbar changeTheme = {changeTheme} />
    </div>
  )
}

export default App