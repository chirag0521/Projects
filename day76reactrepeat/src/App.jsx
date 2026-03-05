import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userDesc, seTuserDesc] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  
  const [allUsers, setAllUsers] = useState(localData)

       

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted",username,imageURL,userRole,userDesc);
    const oldUsers = [...allUsers]
    oldUsers.push({username,imageURL,userRole,userDesc})
    setAllUsers(oldUsers)
    // setAllUsers([...allUsers,{username,imageURL,userRole,userDesc}])
    localStorage.setItem('all-users', JSON.stringify(oldUsers))

    setUsername('')
    setImageURL('')
    setUserRole('')
    seTuserDesc('')
    console.log(oldUsers);
  }
  const deleteHandler = (idx)=>{
    const copyUser = [...allUsers]
    const confi = confirm('Are you sure,  you want to delete this')  // gives true or false i.e.in browser we see ok or cancel
    if(confi){
      copyUser.splice(idx,1)
    } else{
      alert('Element Not deleted')
    }
    setAllUsers(copyUser)
    localStorage.setItem('all-users', JSON.stringify(copyUser))

    
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
          return <div key={idx} className='w-[20vw] bg-white text-black flex flex-col items-center rounded-xl px-8 py-8 text-center'>
                      <img className='h-24 w-24 rounded-full object-center object-cover mb-2' src={elem.imageURL} alt="" />
                      <h1 className='font-semibold text-2xl mt-2'>{elem.username}</h1>
                      <h4 className='italic font-semibold text-lg text-red-400 m-2' >{elem.userRole}</h4>
                      <p className='font-bold text-sm leading-tight text-center'>{elem.userDesc}</p>
                      <button onClick={() => {
                          deleteHandler(idx)
                      }}
                          className='bg-red-600 px-3 py-1 text-xs mt-4 text-white font-semibold rounded active:scale-96 cursor-pointer'>Remove</button>
                  </div>
        })}

      </div>
    </div>
  )
}

export default App