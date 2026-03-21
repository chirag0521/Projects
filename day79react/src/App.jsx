import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Random from './pages/Random'
import Courses from './pages/Courses'
import AnyCourse from './pages/AnyCourse'
import Coursedetail from './pages/Coursedetail'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />}/>
        <Route path='/products' element = {<Products />}/>
        <Route path='/courses' element = {<Courses />}/>

        {/* Nested Routes */}

        <Route path='/products/men' element = {<Men />}/>
        <Route path='/products/women' element = {<Women />}/>

        {/* Dynamic Routes  */}

        <Route path='/about/:id' element = {<Random />}/>
        <Route path='/courses/:id' element={<AnyCourse />}/>

        {/* Nested Dynamic Route */}
        <Route path='/courses/:id/details' element={<Coursedetail />}/>

        {/* Not found page  */}
        <Route path='*' element={<Notfound />}/>

      </Routes>
    </div>
  )

 
}

export default App