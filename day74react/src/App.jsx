import React, { useState } from 'react';



const App = () => {
  const [allUsers, setAllUsers] = useState([])
  const [username, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submitted");
// 1 way 
    // const newAllUsers = [...allUsers]
    // newAllUsers.push(username)
    // setAllUsers(newAllUsers)
    // console.log(newAllUsers)
// 2nd way 
    setAllUsers([...allUsers,username])

    
    // console.log(username)
    setUsername('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' required value={username} onChange={(e) => {
          setUsername(e.target.value)
        }} />
        <button>submit</button>
      </form>
      {allUsers.map((elem)=>{
        return <h1>{elem}</h1>
      })}
    </div>
  )
}

export default App