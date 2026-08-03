// import React, { useReducer } from 'react'
// const UseReduserDemo = () => {
//     function reduser(state,action){
//         if(action.type=="inc"){
//             return state+1
//         }else if(action.type=="d"){
//             return state-1
//         }else if(action.type=="reset"){
//             return 0
//         }else{
//             return state
//         }

//     }
//   let [state,dispatch]=  useReducer(reduser,0)
//   return (
//     <div>
//         <h2>{state}</h2>
//         <button onClick={()=>dispatch({type:"inc"})}>add</button>
//         <button onClick={()=>dispatch({type:"d"})}>--</button>
//         <button onClick={()=>dispatch({type:"reset"})}>reset</button>
//     </div>
//   )
// }

// export default UseReduserDemo



import React, { useReducer } from 'react'

const UseReduserDemo = () => {



    // let ar=[1,2,3,4]
    // let num=[...ar,5,6]

    // function sum(a,b,...num){

    // }
    // sum(1,2,3,4,5,6,43,6,3,56,7,7)
    // console.log();
    








    let data={
        input:"",
        list:[]
    }
    function reduser(state,action){
        if(action.type=="inp"){
            return{
                ...state,
                input:action.payload
            }

        }
        else if(action.type=="add"){
            return{
               ...state,
               list:[...state.list , state.input]
            }

        }
        // else{
        //     return{

        //     }
        // }

    }
  let [state,dispatch]=  useReducer(reduser,data)
  return (
    <div>
        <input  onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}/>
        <button  onClick={()=>dispatch({type:"add"})}>add</button>
        {
            state.list.map((a)=>{
                return(<>
                <li>{a}</li>
                </>)
            })
        }
    </div>
  )
}

export default UseReduserDemo



// console.log(0===false);
// console.log(5+"5");
// console.log( typeof(typeof(5))  );


