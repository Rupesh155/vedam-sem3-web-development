import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const MemoDemo = () => {
  let [count,SetCount]=  useState(0)

// let res=0
//   for(let i=0;i<100000000000;i++){
//     res+=i

//   }

//  100
//   let arr=[]
//   let arr1=[]
//   101
//   let a=5
//   console.log(100==101);
  









//  let data=   useMemo(()=>{
//     let res=0
//     for(let i=0;i<10000000000;i++){
//          res+=i
//     }

//   return res

//   },[])

let demo=()=>{
    console.log("mai hu kaun");
    
}

let fun= useCallback(demo,[])
// demo=100
// demo==101
  return (
    <div>
        {/* <h3>res: {res}</h3> */}
        <h2>{count}</h2>
        <button onClick={()=>SetCount(count+1)}>add</button>
        <Child  fun={fun} />
    </div>
  )
}

export default MemoDemo 



// import React from 'react'

// const MemoDemo = () => {
//     // console.log("hehehehe");≠≠

//     let obj={
//         id:1,
//         name:"om"
//     }
//     localStorage.setItem("key",JSON.stringify(obj))
  
//   let data=  localStorage.getItem("key")
//   console.log(data,"datata");
  
    
//   return (
//     <div>MemoDemo</div>
//   )
// }

// export default MemoDemo