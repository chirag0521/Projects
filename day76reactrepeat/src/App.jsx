import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [username, setUsername] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userDesc, seTuserDesc] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted",username,imageURL,userRole,userDesc);
    const oldUsers = [...allUsers]
    oldUsers.push({username,imageURL,userRole,userDesc})
    setAllUsers(oldUsers)
    // setAllUsers([...allUsers,{username,imageURL,userRole,userDesc}])


    setUsername('')
    setImageURL('')
    setUserRole('')
    seTuserDesc('')
    console.log(oldUsers);
  }
  const deleteHandler = (idx)=>{
    const copyUser = [...allUsers]
    copyUser.splice(idx,1)
    setAllUsers(copyUser)
    
  }
  

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='px-2 py-2 flex flex-wrap justify-center'>
        <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        type="text" 
        placeholder='Enter your name' 
        className='w-[48%] px-5 py-2 text-xl font-semibold border-2 rounded m-2' />

        <input
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value)
        }} 
        type="text" 
        placeholder='Image URL' 
        className='w-[48%] px-5 py-2 text-xl font-semibold rounded border-2 m-2'/>

        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
        type="text" 
        placeholder='Your Role' 
        className='w-[48%] px-5 py-2 text-xl font-semibold rounded border-2 m-2' />

        <input 
        value={userDesc}
        onChange={(e)=>{
          seTuserDesc(e.target.value)
        }}
        type="text" 
        placeholder='Role Description' 
        className='w-[48%] px-5 py-2 text-xl font-semibold rounded border-2 m-2' />
        <button className='w-[97%] px-5 py-2 text-xl bg-emerald-500 rounded active:scale-98 m-2 cursor-pointer'>Create User</button>
      </form>
      <div className='px-4 py-2 flex flex-wrap gap-4'>

        {allUsers.map(function(elem,idx){
          return <Card key={idx} idx={idx} elem = {elem} deleteHandler = {deleteHandler}/>
        })}

      </div>
    </div>
  )
}

export default App