import axios from 'axios'
import React from 'react'

const Dash = () => {
  let token=  localStorage.getItem("token")
  console.log(token,"towdsjhfbewiurgf" );
  
   async function fun1(){
    let res=  await  axios.get("http://localhost:3000/admin",{
            headers:{
                Authorization:token
            }

        })
        console.log(res,"resssssssssss");
        
    }
  return (
    <div>
        <button onClick={fun1}> get admin info</button>
    </div>
  )
}

export default Dash