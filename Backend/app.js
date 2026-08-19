// // const fs = require("fs");

// // // Create Folder
// // fs.mkdirSync("students");

// // console.log("Folder created");

// // // Create File
// // fs.writeFileSync(
// //     "students/data.txt",
// //     "Rohit\nAman\nRahul\nRaju"
// // );

// // console.log("File created");

// // // Read File
// // const data = fs.readFileSync("students/data.txt");

// // console.log("Current Data:");
// // console.log(data.toString());

// // // Append Data
// // fs.appendFileSync(
// //     "students/data.txt",
// //     "\nPriya"
// // );

// // console.log("Data added");

// // // Read Updated File
// // const updatedData = fs.readFileSync("students/data.txt");

// // console.log("Updated Data:");
// // console.log(updatedData.toString());










// // // async way
// // // ====================
// // // 1. CREATE FOLDER
// // // ====================

// // fs.mkdir("students", (err) => {
// //     if (err) {
// //         console.log(err.message);
// //         return;
// //     }

// //     console.log("Folder created");
// // });


// // // ====================
// // // 2. CREATE FILE
// // // ====================

// // fs.writeFile(
// //     "students/data.txt",
// //     "Rohit\nAman\nRahul\nRaju",
// //     (err) => {
// //         if (err) {
// //             console.log(err.message);
// //             return;
// //         }

// //         console.log("File created");
// //     }
// // );


// // // ====================
// // // 3. READ FILE
// // // ====================

// // fs.readFile("students/data.txt", (err, data) => {
// //     if (err) {
// //         console.log(err.message);
// //         return;
// //     }

// //     console.log("Current Data:");
// //     console.log(data.toString());
// // });


// // // ====================
// // // 4. APPEND DATA
// // // ====================

// // fs.appendFile(
// //     "students/data.txt",
// //     "\nPriya",
// //     (err) => {
// //         if (err) {
// //             console.log(err.message);
// //             return;
// //         }

// //         console.log("Data added");
// //     }
// // );


// // // ====================
// // // 5. READ UPDATED FILE
// // // ====================

// // fs.readFile("students/data.txt", (err, data) => {
// //     if (err) {
// //         console.log(err.message);
// //         return;
// //     }

// //     console.log("Updated Data:");
// //     console.log(data.toString());
// // });







// let express=  require('express')
// let app=  express()
// app.use(express.json())
// app.post('/about',(req,res)=>{
//     console.log(req.body);
    
// })
// app.listen(3000,()=>{
//     console.log("server");
    
// })

// let express=  require('express')
// let app=  express()
// app.use(express.json())


// app.get('/',(req,res)=>{
//     res.send("kyaa chhaiyee bataooo")

// })
// app.get('/product',(req,res)=>{
//     res.status(200).json({data:products})

// })
// app.get("/products/:id", (req, res) => {

//     let { id } = req.params;

//     let singleData = products.find(
//         (a) => a.id === Number(id)
//     );

//     if (!singleData) {
//         return res.status(404).json({
//             msg: "Product not found"
//         });
//     }

//     res.status(200).json({
//         data: singleData
//     });
// });
// app.get('/search',(req,res)=>{
//     let {category}=req.query

//   let data=  products.find((a)=>{
//         return a.category==category
//     })
//     if(!data){
//         res.status(404).send({msg:"not found"})
//     }
//     res.status(200).json({data:data})


// })

// app.post('/pr',(req,res)=>{
//     // console.log(req.body);
//     let {id,category,name,price,stock}=req.body
//     let obj={
//         id:id,
//         category:category,
//         name:name,
//         price:price,
//         stock:stock
//     }
//     products.push(obj)
//     res.json({msg:"dne bro "})
    

// })
// app.put("/product/:id",(req,res)=>{
//     let {id}=req.params;
//     let {category}=req.body
//     let data=products.find((a)=>{
//         return a.id==Number(id)
//     })
//     data.category=category
//     res.status(200).json({
//         msg: "Product updated successfully",
//         data: data
//     });
    


// })
// app.delete("/product/:id", (req, res) => {
//     let { id } = req.params;

//     let index = products.findIndex((a) => {
//         return a.id == Number(id);
//     });

//     if (index === -1) {
//         return res.status(404).json({
//             msg: "Product not found"
//         });
//     }

//     let deletedProduct = products.splice(index, 1);

//     res.status(200).json({
//         msg: "Product deleted successfully",
//         data: deletedProduct
//     });
// });
// app.listen(3000,()=>{

// })


// // GET     /products

// // GET     /products/3

// // GET     /products?category=mobile

// // POST    /products

// // PUT     /products/3

// // DELETE  /products/3

//    let express=  require('express')
//   let app= express()
//   app.get('/',(req,res)=>{
//     res.send("helloooo")
//   })
//   app.get('/new/:id',(req,res)=>{
//     // let id=  req.params.id
//     let {id}=req.params
//     // console.log(  req.params,"heheh");
//     res.send(id)

//   })
// // http://localhost:3000/search?firstName=om&lastName=jain
// app.get("/search",(req,res)=>{
//     console.log(req.query,"hehe");
    
//     res.send("heheh")

// })
// http://localhost:3000/search?firstName=om

//   app.listen(3000,()=>{
//     console.log("server......");
    

//   })



// //   local:300/about?search=iphone

// let express=  require('express')
//  let app=  express()
//  app.get('/',(req,res)=>{
    
//  })
//  app.post('/data',(req,res)=>{
//     console.log(req.body);
    
//     res.send("hehehe")
    
//  })
//  app.listen(3000,()=>{
//     console.log("server....");
    
//  })
// let express=  require("express")
// let app= express()
// app.use(express.json())
// app.get("/",(req,res)=>{
//    res.send("hehehe")

// })
// app.get("/home/:id",(req,res)=>{
//    console.log(req.params);
   
//    res.send("hello")

// })
// app.post('/about',(req,res)=>{
//    console.log(req.body);
   
//    res.status(200).json({msg:"hello"})

// })

// app.listen(4000,()=>{
//    console.log("server.....");
   
// })







 let express= require("express")
 let app= express()
 let products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "mobile",
        price: 69999,
        stock: 10
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "mobile",
        price: 64999,
        stock: 8
    },
    {
        id: 3,
        name: "MacBook Air",
        category: "laptop",
        price: 99999,
        stock: 5
    },
    {
        id: 4,
        name: "Dell XPS 14",
        category: "laptop",
        price: 89999,
        stock: 7
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "headphones",
        price: 24999,
        stock: 15
    },
    {
        id: 6,
        name: "Sony XM5",
        category: "headphones",
        price: 29999,
        stock: 12
    }
];


// products[0].id=10
app.use(express.json())


app.get('/',(req,res)=>{
   res.send(products)
   // res.send("hehe")


})
app.get('/product/:id',(req,res)=>{
   let {id}=req.params
  let data= products.find((a)=>{
      return a.id===Number(id)

   })
   if(!data){
      return res.status(404).json({msg:"not founddddddddd"})
   }
   res.status(200).json({msg:data})
   // console.log(data,"ididid");
   


})


// if(![]){
//    console.log("hehehe");
   
// }
app.get('/search',(req,res)=>{
   let {category}=req.query
   // console.log(category,"heheeh");
    
      let data=   products.filter((a)=>{
            return a.category==category
         })
         // console.log(data,"hehe");
         if(!data){
            return res.status(404).json({msg:"not founddddddddd"})

         }
         res.status(200).json({msg:data})
         
   

})
app.post('/product',(req,res)=>{
   console.log(req.body);
   let obj={
      ...req.body

   }
   products.push(obj)
   res.send("doneee")

   


})
app.put('/product/:id',(req,res)=>{
   let {id}=req.params;
   console.log(id,"hehe");
   console.log(req.body,"updatedddddd");
   let {stock}=req.body
   
 let data=  products.find((a)=>{
   // console.log(a,"aa");
   console.log(a.id,"hehe");
   
   
      return a.id===Number(id)

   })
   console.log(data,"datata");
   data.stock=stock
   res.json({msg:"done",data})
   
   


})


 app.listen(4000,()=>{
   console.log("server.....");
   

 })


// // GET     /products

// // GET     /products/3

// // GET     /products?category=mobile

// // POST    /products

// // PUT     /products/3   => 1 => stock ==100

// // DELETE  /products/3





