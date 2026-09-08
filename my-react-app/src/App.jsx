// // // // import React from 'react'
// // // // import UseEffectDemo from './class_02/useEffectDemo'
// // // // import NavBar from './class_03/NavBar'
// // // // import { Route, Routes } from 'react-router-dom'
// // // // import Home from './class_03/Home'
// // // // import About from './class_03/About'
// // // // import ProductList from './class_03/ProductList'
// // // // import ProductsD from './class_03/ProductsD'
// // // // // import StateExample from './class_01/StateExample'
// // // // // https://github.com/Rupesh155

// // // // const App = () => {
// // // //   return (
// // // //     <div>
// // // //       {/* <StateExample/> */}
// // // //        {/* <UseEffectDemo/> */}
// // // //        <NavBar/>
// // // //        {/* http://localhost:5173/p/1 */}
// // // //        <Routes>
// // // //         <Route   path='/'  element={<Home/>}/>
// // // //         <Route   path='/about'  element={<About/>}/>
// // // //         <Route   path='/list'  element={<ProductList/>}/>
// // // //         <Route   path='/p/:id'  element={<ProductsD/>}/>



// // // //        </Routes>

// // // //     </div>
// // // //   )
// // // // }

// // // // export default App


// // // // localhost:5173/




// // // import React from 'react'
// // // // import Home from './class_03/Home'
// // // import UseReduserDemo from './class_05/useReduserDemo'
// // // import MemoDemo from './class_06/MemoDemo'
// // // import Assignment from './class_07/Assignment'

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       {/* <Home/> */}
// // //       {/* <UseReduserDemo/> */}
// // //       {/* <MemoDemo/> */}
// // //       <Assignment/>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'

// // const App = () => {
// //  let [apiData,SetApiData]=    useState([])
// //   useEffect(()=>{
// //    async function api(){
// //       let res=  await   axios.get("http://localhost:4000/")
// //       console.log(res.data);
      
// //     }
// //     api()



// //           // fetch("http://localhost:4000/").then((res)=>{
// //           //   return res.json()

// //           // }).then((data)=>{
// //           //   console.log(data);
// //           //   SetApiData(data)
// //           // })

// //   },[])

// //   return (
// //     <div>
// //       {
// //         apiData.map((val)=>{
// //           return(<>
// //           <h1>{val.id}</h1>
// //           <h2>{val.name}</h2>
// //           </>)

// //         })
// //       }
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'

// const App = () => {

//   function step1(){
//     return new Promise((res,rej)=>{
//       setTimeout(()=>{
//         console.log("selecrteddd");
        
//       })

//     },4000)

//   }
//   function step2(){
//     return new Promise((res,rej)=>{
//       setTimeout(()=>{
//         console.log("selecrteddd");
        
//       },4000)

//     })

//   }
//   step1().then(()=>{
//     return step2().then(()=>{

//     })
//   })

// //   function step1(fn){
// //     setTimeout(()=>{
// //       console.log("Seletectttttt");
// //       fn()

      

// //     },4000)
// //   }
// //   function step2(fn){
// //     setTimeout(()=>{
// //       console.log("filterrrrrr");
// //       fn()
      

// //     },3000)
// //   }
// //   function step3(){
// //     setTimeout(()=>{
// //       console.log("posttt");
      

// //     },2000)
// //   }


// // step1( function(){

// //   step2(function (){
// //     step3()
// //   })

// // })

    
// // let p= new Promise((res,rej)=>{
// //   // res()
// //   rej()

// // })
// // console.log(p,"pppp");


import React from "react";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

function App() {

  return (
    <div>
     <Routes>
      <Route  path="/"  element={<Signup/>}/>
      <Route  path="/login"  element={<Login/>}/>
     </Routes>
      <Signup />
    </div>
  );

}

export default App;




















// // setTimeout(()=>{
// //   console.log("B");
  
// // },0)
// // console.log("A");
// // new Promise(()=>{
// //   console.log("D");
  
// // })
  



//   return (
//     <div>App</div>
//   )
// }

// export default App










