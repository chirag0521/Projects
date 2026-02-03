import React, { useState } from 'react'
import Washroom from './assets/components/Washroom'


const App = () => {
  const [gender, setGender] = useState('Male')
  function changeGender(){
    if(gender=='Male'){
      setGender('Female')

    }else if(gender=='Female'){
      setGender('Others')
      
    }else{
      setGender('Male')
    }
  }
  return (
    <div className='parent'>
      <h1>{gender}</h1>
      <button onClick={changeGender}>Change Gender</button>
      <Washroom user={gender}/>
      
    </div>
  )
}

export default App    




















// import React, { useState } from 'react'

// const App = () => {
//   const [marks, setMarks] = useState([90,76,18,28,82])
//   function graceStudent(){
//     const newMarks = marks.map(function(elem){
//       if(elem<95){
//         return elem+5
//       }else{
//         return elem
//       }
//     })
//     setMarks(newMarks)

//   }
//   return (
//     <div>{marks.map(function(elem,idx){
//       return <h1 key={idx}>Marks of student {idx+1}:{elem}({elem>=33?'pass':'fail'})</h1>
//     })}

//       <button onClick={graceStudent}>Give them grace</button>
//     </div>
//   )
// }

// export default App