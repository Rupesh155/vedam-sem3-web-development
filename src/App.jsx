import React from 'react'
import UseEffectDemo from './class_02/useEffectDemo'
import NavBar from './class_03/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './class_03/Home'
import About from './class_03/About'
import ProductList from './class_03/ProductList'
import ProductsD from './class_03/ProductsD'
// import StateExample from './class_01/StateExample'
// https://github.com/Rupesh155

const App = () => {
  return (
    <div>
      {/* <StateExample/> */}
       {/* <UseEffectDemo/> */}
       <NavBar/>
       {/* http://localhost:5173/p/1 */}
       <Routes>
        <Route   path='/'  element={<Home/>}/>
        <Route   path='/about'  element={<About/>}/>
        <Route   path='/list'  element={<ProductList/>}/>
        <Route   path='/p/:id'  element={<ProductsD/>}/>



       </Routes>

    </div>
  )
}

export default App


// localhost:5173/



