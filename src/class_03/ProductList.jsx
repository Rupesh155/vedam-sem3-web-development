


import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  let navi=  useNavigate()
    const products = [
    {
      id: 1,
      name: "iPhone 16",
      price: 80000,
    },
    {
      id: 2,
      name: "Samsung S26",
      price: 70000,
    },
    {
      id: 3,
      name: "OnePlus 14",
      price: 50000,
    },
  ];


  function fun1(id){
    console.log(id);
    navi(`/p/${id}`)
    
  }
  return (
    <div>
        {
            products.map((a)=>{
                return(<>
                <li onClick={()=>fun1(a.id)}>{a.name}</li>
                </>)
            })
        }
    </div>
  )
}

export default ProductList