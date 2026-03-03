import React from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App