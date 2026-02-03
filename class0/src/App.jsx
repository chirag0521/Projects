import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'


const App = () => {

  // const users = ['om', 'alex', 'chirag', 'alexa']
  function btnClicked(){
    console.log('Button is Clicked');
    
  }
  return (
    // <div className ='p-10 h-screen bg-red-500'>
    //   {users.map(function(elem){
    //     return <Card user={elem}/>
    //   })}
    // </div>
    <div>
      <Navbar title = 'Plasma' color = 'red' links={['Home','Services','Account','Contact', 'About']}/>
      <Navbar title = 'Neuro' color='lightblue' links={['Home','Services','Account','Contact']}/>
      <button
        onClick={btnClicked}
       className = 'active:scale-95 cursor-pointer font-bold m-2 bg-amber-600 text-white px-4 py-6 rounded'>
        Click to Download
      </button>
    </div>
  )
}

export default App
