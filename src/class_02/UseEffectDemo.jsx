import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {



    // let arr=[1,2,3,4,5,6,7]
    // arr.map((c,b,a)=>{
    //     console.log(b);
    // })











    // console.log("hello");
    // setInterval(()=>{
    //     console.log("heheh");
        
    // })
    // setTimeout(()=>{

    // })
    // document
    // fetch
    









//   let [count,SetCount]=  useState(0)
//    let [city,SetCity]=     useState('delhi')
  let [apiData,SetApiData] =   useState([])
  console.log(apiData,"apiDatatatatata");
  console.log("hehehe");
  console.log("datata");
  console.log("byeeee");
  console.log("jwbfuywfgbwiuf");
  
  
  
  
  useEffect(()=>{
    // console.log("hellloo");
    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
        return res.json()

    }).then((data)=>{
        console.log(data);
        SetApiData(data)
        

    })

  },[])

  
  return (
    <div>

        {
            apiData.map((a)=>{
                return(<>
                <h2>{a.id}</h2>
                <h4>{a.title}</h4>
                <h3>{a.userId}</h3>
                <h4>{a.completed}</h4>
                </>)
            })
        }
        {/* <h3>{count}</h3>
        <h5>{city}</h5>
        <button onClick={()=>SetCity("goa")}>change</button>
        <button onClick={()=>SetCount(count+1)}>click</button> */}
    </div>
  )
}

export default UseEffectDemo