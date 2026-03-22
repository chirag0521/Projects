import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Cohort from './pages/Cohort'
import Cohort1 from './pages/Cohort1'
import AllCourses from './pages/AllCourses'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />}>
          <Route path='/courses' element={<AllCourses />}/>
          <Route path='/courses/cohort' element={<Cohort />} />
          <Route path='/courses/cohort1' element={<Cohort1 />} />
        </Route>
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App