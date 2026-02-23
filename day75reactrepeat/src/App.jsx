import React, { useState } from 'react'
import Card from './components/Card'


const App = () => {
  const [username, setUsername] = useState('')
  const [userrole, setUserrole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userDes, setuserDes] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    const oldUsers = [...allUsers]
    oldUsers.push({username,userrole,userDes,imageURL})
    setAllUsers(oldUsers)


    console.log("Form submitted",username,userrole,userDes,imageURL);

    console.log(oldUsers);
    


    setUsername('')
    setUserrole('')
    setimageURL('')
    setuserDes('')
    
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
      }}className=' px-2 py-2 flex flex-wrap justify-center'>
        <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)    
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
        type="text" 
        placeholder='Enter name' />

        <input 
        value={imageURL}
        onChange={(e)=>{
          setimageURL(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
        type="text" 
        placeholder='Image url'/>

        <input 
        value={userrole}
        onChange={(e)=>{
          setUserrole(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
        type="text" 
        placeholder='Enter role'/>

        <input 
        value={userDes}
        onChange={(e)=>{
          setuserDes(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[48%]' 
        type="text" 
        placeholder='Enter Description'/>


        <button className=' px-5 py-2 bg-emerald-500 rounded m-2 w-[97%] active:scale-99 cursor-pointer'>Create User</button>
      </form>
      <div className='px-2 py-4 flex flex-wrap gap-4'>

        {allUsers.map(function(elem,idx){
          return <Card idx = {idx} elem={elem} deleteHandler = {deleteHandler}/>
        })}


      </div>
    </div>
  )
}

export default App