import React from 'react'
import UseEffectDemo from './class_02/useEffectDemo'
import NavBar from './class_03/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './class_03/Home'
import About from './class_03/About'
// import StateExample from './class_01/StateExample'
// https://github.com/Rupesh155

const App = () => {
  return (
    <div>
      {/* <StateExample/> */}
       {/* <UseEffectDemo/> */}
       <NavBar/>
       <Routes>
        <Route  path='/'   element={<Home/>}/>
        <Route  path='/about'   element={<About/>}/>

       </Routes>
    </div>
  )
}

export default App


// localhost:5173/