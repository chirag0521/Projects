import React, { useState } from 'react'
const App = () => {

  const [username, setUsername] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {

    e.preventDefault()

    const oldUsers = [...allUsers]
    oldUsers.push({ username, imageUrl, userRole, userDesc })
    console.log(oldUsers);

    // setAllUsers(...allUsers,[username,imageUrl,userRole,userDesc]) same meaning as above 3 lines

    setAllUsers(oldUsers)

    console.log("form submitted");
    // console.log(username,imageUrl,userRole,userDesc);
    setUsername('')
    setImageUrl('')
    setUserRole('')
    setuserDesc('')

  }

  const deleteHandler = (idx) => {
    const copyUser = [...allUsers]
    copyUser.splice(idx, 1)
    setAllUsers(copyUser)


  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-wrap px-2 py-2 ' >


        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter your name' />


        <input
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Image Url' />

        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter Role' />

        <input
          value={userDesc}
          onChange={(e) => {
            setuserDesc(e.target.value)
          }}
          className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]'
          type="text"
          placeholder='Enter description' />

        <button className='px-5 py-2 text-2xl rounded m-2 w-[98%] active:scale-95 cursor-pointer bg-emerald-700'>Create User</button>
      </form>
      <div className='flex flex-wrap px-4 py-6 gap-2'>
        {allUsers.map(function (elem, idx) {
          return (<div key={idx} className='lg:w-[18vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-3 px-8 flex flex-col items-center text-center bg-white text-black'>
            <img className='h-24 w-24 rounded-full object-cover object-center' src={elem.imageUrl} alt="" />
            <h1 className='text-2xl mt-2 font-bold'>{elem.username}</h1>
            <h5 className=' text-blue-500 text-lg font-semibold my-3'>{elem.userRole}</h5>
            <p className='text-sm font-medium leading-tight'>{elem.userDesc}</p>
            <button onClick={() => {
              deleteHandler(idx)
            }} className='px-4 py-2 rounded bg-red-600 text-xs cursor-pointer text-white font-semibold mt-3 active:scale-95'>Remove</button>

          </div>
          )
        })}
      </div>
    </div>
  )
}

export default App