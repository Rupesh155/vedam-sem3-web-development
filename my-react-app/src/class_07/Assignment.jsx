// // import React, { useEffect, useState } from 'react'
// // import './A.css'
// // const Assignment = () => {
// //     let [searchData,SetSearchData]=useState('')
// //     let [apiData,SetApiData]=useState([])
// //     const     handleSearch=async()=>{
// //         if (searchData.trim() === "") {
// //             alert("Input cannot be empty");
// //             return;
// //           } let data=  await fetch(`https://dummyjson.com/products/search?q=${searchData}`)
// //         let res=await data.json()
// //         console.log(res);
// //     }

// //     useEffect(()=>{ 

// //          fetch('https://dummyjson.com/products').then((res)=>{
// //             return res.json()

// //          }).then((data)=>{
// //             console.log(data);
// //             SetApiData(data.products)
            

// //          })

// //     },[])

// //     function asc(){
// //         console.log("heh");
        
// //         let copyData=   [...apiData].sort((a,b)=>a.price-b.price)
// //         SetApiData(copyData)
// //     }
// //     return (
// //         <div>
      
// //           <div className="searchBox">
// //             <input
// //               type="text"
// //               placeholder="Search Products..."
// //               value={searchData}
// //               onChange={(e) => SetSearchData(e.target.value)}
// //             />
      
// //             <button onClick={handleSearch}>
// //               Search
// //             </button>
// //             <button  onClick={asc}>ascending</button>
// //             <button>descending</button>

// //           </div>
      
// //           <div id="main">
// //             {apiData.map((a) => (
// //               <div id="card" key={a.id}>
// //                 <img src={a.thumbnail} alt={a.title} />
// //                 <h4>{a.title}</h4>
// //                 <p>{a.price}</p>
// //               </div>
// //             ))}
// //           </div>
      
// //         </div>
// //       );
// // }

// // export default Assignment




// import React, { useEffect, useState } from "react";
// import "./A.css";
// const Assignment = () => {
//   const [searchData, setSearchData] = useState("");
//   const [apiData, setApiData] = useState([]);
//   const [brand, setBrand] = useState("");
//   const [price, setPrice] = useState("");
                                            
//   // Search
//   const handleSearch = async () => {
//     if (searchData.trim() === "") {
//       alert("Input cannot be empty");
//       return;
//     }

//     const response = await fetch(
//       `https://dummyjson.com/products/search?q=${searchData}`
//     );
                      
//     const data = await response.json();
                                 
//     setApiData(data.products);
//   };

//   // Load Products
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setApiData(data.products);
//       });
//   }, []);

//   // Ascending
//   function asc() {
//     let copyData = [...apiData].sort((a, b) => a.price - b.price);
//     setApiData(copyData);
//   }

//   // Descending
//   function desc() {
//     let copyData = [...apiData].sort((a, b) => b.price - a.price);
//     setApiData(copyData);
//   }

//   // Dynamic Brands
//   const brands = [...new Set(apiData.map((item) => item.brand))];

//   // Filter
//   let filterData = apiData;

//   if (brand !== "") {
//     filterData = filterData.filter((item) => item.brand === brand);
//   }

//   if (price === "100") {
//     filterData = filterData.filter((item) => item.price <= 100);
//   }

//   if (price === "500") {
//     filterData = filterData.filter(
//       (item) => item.price > 100 && item.price <= 500
//     );
//   }

//   if (price === "1000") {
//     filterData = filterData.filter((item) => item.price > 500);
//   }

//   return (
//     <div>

//       <div className="searchBox">

//         <input
//           type="text"
//           placeholder="Search Products..."
//           value={searchData}
//           onChange={(e) => setSearchData(e.target.value)}
//         />

//         <button onClick={handleSearch}>Search</button>

//         <button onClick={asc}>Ascending</button>

//         <button onClick={desc}>Descending</button>

//         <select
//           value={brand}
//           onChange={(e) => setBrand(e.target.value)}
//         >
//           <option value="">All Brands</option>

//           {brands.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>

//         <select
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         >
//           <option value="">All Prices</option>

//           <option value="100">Below 100</option>

//           <option value="500">100 - 500</option>

//           <option value="1000">Above 500</option>
//         </select>

//       </div>

//       <div id="main">

//         {filterData.map((a) => (

//           <div id="card" key={a.id}>

//             <img src={a.thumbnail} alt={a.title} />

//             <h4>{a.title}</h4>

//             <h5>{a.brand}</h5>

//             <p>${a.price}</p>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default Assignment;




// import React, { useEffect, useState } from 'react'

// const Assignment = () => {

//     let arr=[1,2,3,4]

//     // 1-2




//    let [input,SetInput]=    useState("")
//    let [apiData,SetApiData]=    useState([])

//     async   function apiCall(){
//         if(input.trim()==""){
//             alert("emptyyyy")
//             return;
//         }
//       let res=     await  fetch(`https://dummyjson.com/products/search?q=${input}`)
//        let data=    await res.json()
//        console.log(data.product,"api");
       

//    }

//    useEffect(()=>{

//     fetch("https://dummyjson.com/products").then((res)=>{
//         return res.json()

//     }).then((data)=>{
//         console.log(data);
//         SetApiData(data.products)
        

//     })

//    },[])


//    function fun1(){

//   let copyData=    [...apiData].sort((a,b)=>a.price-b.price)
//   SetApiData(copyData)


     


//    }
//   return (
//     <div>
//         <input  onChange={(e)=>SetInput(e.target.value)}/>
//         <button onClick={apiCall}>search</button>
//         <button onClick={fun1}>ascending</button>
//         {
//             apiData?.map((a)=>{
//                 return(<>
//                 <img   src={a.thumbnail}/>
//                 <h4>{a.price}</h4>
//                 </>)

//             })
//         }
//     </div>
//   )
// }

// export default Assignment



import React, { useCallback, useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prevCount) => prevCount + step);
  }, [step]);

  // step dependency array mein hona zaroori hai
  // kyunki increase function ke andar hum step ko use kar rahe hain.
  // Jab step change hoga, tab increase function bhi latest step
  // value ke saath dobara create hoga.

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Step: {step}</h3>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={() => setStep((prev) => prev + 1)}>
        Increase Step
      </button>
    </div>
  );
}

export default Counter;



