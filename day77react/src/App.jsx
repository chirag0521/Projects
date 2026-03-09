import React, { useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
const App = () => {
  
  const [allData, setAllData] = useState([])
  async function getData(){


    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(response.data);
    console.log(response.data);
    
    console.log("Data aa gaya");
    
  }

  return (
    <div>
      <button onClick={()=>{
        getData()
      }}>Get Data</button>

      <div className='all-cards'>
        {allData.map(function(elem,idx){
        return <div key={idx}>
          <Card elem = {elem} />
        </div>

      })}
      </div>
      
    </div>
  )
}

export default App