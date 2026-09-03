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







//  let express= require("express")
//  let app= express()
//  let cors= require('cors')
//  app.use(cors())
//  let products = [
//     {
//         id: 1,
//         name: "iPhone 15",
//         category: "mobile",
//         price: 69999,
//         stock: 10
//     },
//     {
//         id: 2,
//         name: "Galaxy S24",
//         category: "mobile",
//         price: 64999,
//         stock: 8
//     },
//     {
//         id: 3,
//         name: "MacBook Air",
//         category: "laptop",
//         price: 99999,
//         stock: 5
//     },
//     {
//         id: 4,
//         name: "Dell XPS 14",
//         category: "laptop",
//         price: 89999,
//         stock: 7
//     },
//     {
//         id: 5,
//         name: "AirPods Pro",
//         category: "headphones",
//         price: 24999,
//         stock: 15
//     },
//     {
//         id: 6,
//         name: "Sony XM5",
//         category: "headphones",
//         price: 29999,
//         stock: 12
//     }
// ];


// // products[0].id=10
// app.use(express.json())


// app.get('/',(req,res)=>{
//    res.send(products)
//    // res.send("hehe")


// })
// app.get('/product/:id',(req,res)=>{
//    let {id}=req.params
//   let data= products.find((a)=>{
//       return a.id===Number(id)

//    })
//    if(!data){
//       return res.status(404).json({msg:"not founddddddddd"})
//    }
//    res.status(200).json({msg:data})
//    // console.log(data,"ididid");
   


// })


// // if(![]){
// //    console.log("hehehe");
   
// // }
// app.get('/search',(req,res)=>{
//    let {category}=req.query
//    // console.log(category,"heheeh");
    
//       let data=   products.filter((a)=>{
//             return a.category==category
//          })
//          // console.log(data,"hehe");
//          if(!data){
//             return res.status(404).json({msg:"not founddddddddd"})

//          }
//          res.status(200).json({msg:data})
         
   

// })
// app.post('/product',(req,res)=>{
//    console.log(req.body);
//    let obj={
//       ...req.body

//    }
//    products.push(obj)
//    res.send("doneee")

   


// })
// app.put('/product/:id',(req,res)=>{
//    let {id}=req.params;
//    console.log(id,"hehe");
//    console.log(req.body,"updatedddddd");
//    let {stock}=req.body
   
//  let data=  products.find((a)=>{
//    // console.log(a,"aa");
//    console.log(a.id,"hehe");
   
   
//       return a.id===Number(id)

//    })
//    console.log(data,"datata");
//    data.stock=stock
//    res.json({msg:"done",data})
   
   


// })


//  app.listen(4000,()=>{
//    console.log("server.....");
   

//  })



// //  cors


// // // GET     /products

// // // GET     /products/3 

// // // GET     /products?category=mobile

// // // POST    /products

// // // PUT     /products/3   => 1 => stock ==100

// // // DELETE  /products/3


let express= require("express")
let mongoose=   require('mongoose')
let bcryptjs=  require('bcryptjs')
  let cors=require('cors')
let app=  express()
let User=  require('./db/db.js')
let jwt=  require('jsonwebtoken')
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
   console.log("db......");
   
})

app.post("/signUp", async(req,res)=>{
   let {name,email,passWord ,role}=req.body
  let findData=   await User.findOne({email})
  console.log(findData,"hjehehe");
  if(findData){
   return res.send("user jinda haii....")
  }else{
     let updateddP=   await bcryptjs.hash(passWord,10)

     console.log(updateddP,"dekhoooooo");
     
 let UserInfo=  new User({
      name,email,
      passWord:updateddP,
      role:role||'user'
   

   })
      await UserInfo.save()
      res.send("done.......")
  }
})



app.post('/login', async(req,res)=>{
   let {email,passWord}=req.body

 let findData=   await User.findOne({email})    
 console.log(findData,"heheh");

 let validP= await   bcryptjs.compare(passWord,findData.passWord)
 if(!validP){
   return res.send("kuch nhi ho payega aapse.....")
 }

  let token=    jwt.sign({email:findData.email,role:findData.role},"hehehehehe")
  console.log(token,"hehe");

  


 
 res.json({msg:"done",token:token})

})
let auth=(req,res,next)=>{
   let token=req.headers.authorization;
   console.log(token,"toeknn");
   
   if(!token){
      return res.send("kaun hai app...")
   }
  let decode=  jwt.verify(token,"hehehehehe")
  console.log(decode,"isse");
  req.user=decode

  next()
}
let roleCheck=(role)=>{
   return (req,res,next)=>{
      if(req.user.role!==role){
         return res.send("who the hell are u...........")
      }
      // console.log(req.user,"isko dekhoooo");
      next()
   }
}




app.get("/api",auth, roleCheck("admin"),(req,res)=>{
   res.send("heheh")

})
app.get('/admin',(req,res)=>{
   res.send("mai hu adminnnnnn")

})

// 123 => abc => acb
// app.post('/',async(req,res)=>{
//    let {name,email,passWord}=req.body

//  let UserData=  new User({
//       name,email,passWord
//    })
//      await UserData.save()
//      res.send("doneeee")


//    // console.log(name,email,passWord);
   

// })


app.listen(3000,()=>{
   console.log("server......");
   
})



// Saare employees ka data dekho.
// Sirf name aur salary dekho.
// Age 25 se zyada wale employees nikalo.
// Pune ke employees nikalo.`
// Pune ke employees jinki salary 40,000 se zyada hai.
// IT department ke employees nikalo.
// Pune ya Mumbai ke employees nikalo.
// Age 25 se 30 ke beech wale employees nikalo.
// Salary highest se lowest order me data dekho.
// Top 5 highest salary wale employees nikalo.

// CREATE TABLE employee (
//    id INT,
//    name VARCHAR(50),
//    age INT,
//    city VARCHAR(50),
//    department VARCHAR(50),
//    salary DECIMAL(10,2),
//    experience INT,
//    email VARCHAR(100)
// );


// INSERT INTO employee (id, name, age, city, department, salary, experience, email)
// VALUES
// (1, 'Aman', 22, 'Pune', 'IT', 25000.00, 1, 'aman@gmail.com'),
// (2, 'Riya', 24, 'Mumbai', 'HR', 32000.00, 2, 'riya@gmail.com'),
// (3, 'Rohit', 27, 'Delhi', 'IT', 45000.00, 5, 'rohit@gmail.com'),
// (4, 'Priya', 23, 'Pune', 'Finance', 28000.00, 2, NULL),
// (5, 'Rahul', 29, 'Mumbai', 'Sales', 50000.00, 6, 'rahul@gmail.com'),
// (6, 'Neha', 26, 'Delhi', 'HR', 38000.00, 4, 'neha@gmail.com'),
// (7, 'Karan', 25, 'Pune', 'IT', 35000.00, 3, 'karan@gmail.com'),
// (8, 'Sneha', 28, 'Indore', 'Finance', 42000.00, 5, 'sneha@gmail.com'),
// (9, 'Vikas', 21, 'Mumbai', 'Sales', 24000.00, 1, NULL),
// (10, 'Pooja', 30, 'Delhi', 'IT', 55000.00, 7, 'pooja@gmail.com'),
// (11, 'Ankit', 24, 'Pune', 'HR', 30000.00, 2, 'ankit@gmail.com'),
// (12, 'Kajal', 27, 'Mumbai', 'Finance', 47000.00, 5, 'kajal@gmail.com'),
// (13, 'Deepak', 31, 'Indore', 'Sales', 60000.00, 8, 'deepak@gmail.com'),
// (14, 'Aarti', 23, 'Delhi', 'IT', 29000.00, 2, 'aarti@gmail.com'),
// (15, 'Sahil', 26, 'Pune', 'Finance', 40000.00, 4, NULL),
// (16, 'Nisha', 28, 'Mumbai', 'HR', 46000.00, 6, 'nisha@gmail.com'),
// (17, 'Mohit', 25, 'Delhi', 'Sales', 36000.00, 3, 'mohit@gmail.com'),
// (18, 'Simran', 29, 'Indore', 'IT', 52000.00, 7, 'simran@gmail.com'),
// (19, 'Arjun', 22, 'Pune', 'HR', 26000.00, 1, 'arjun@gmail.com'),
// (20, 'Riya', 27, 'Mumbai', 'IT', 48000.00, 5, 'riya2@gmail.com'),
// (21, 'Akash', 32, 'Delhi', 'Finance', 65000.00, 10, NULL),
// (22, 'Divya', 24, 'Indore', 'Sales', 33000.00, 3, 'divya@gmail.com'),
// (23, 'Manish', 30, 'Pune', 'IT', 58000.00, 8, 'manish@gmail.com'),
// (24, 'Shreya', 26, 'Mumbai', 'Finance', 41000.00, 4, 'shreya@gmail.com'),
// (25, 'Ravi', 23, 'Delhi', 'HR', 31000.00, 2, 'ravi@gmail.com'),
// (26, 'Tanya', 28, 'Indore', 'IT', 49000.00, 6, NULL),
// (27, 'Suresh', 33, 'Pune', 'Sales', 70000.00, 11, 'suresh@gmail.com'),
// (28, 'Meena', 25, 'Mumbai', 'HR', 37000.00, 3, 'meena@gmail.com'),
// (29, 'Abhishek', 29, 'Delhi', 'Finance', 54000.00, 7, 'abhishek@gmail.com'),
// (30, 'Isha', 22, 'Indore', 'IT', 27000.00, 1, 'isha@gmail.com'),
// (31, 'Vivek', 34, 'Pune', 'Finance', 75000.00, 12, 'vivek@gmail.com'),
// (32, 'Anjali', 27, 'Mumbai', 'Sales', 44000.00, 5, NULL),
// (33, 'Rakesh', 26, 'Delhi', 'IT', 43000.00, 4, 'rakesh@gmail.com'),
// (34, 'Sonia', 24, 'Indore', 'HR', 34000.00, 3, 'sonia@gmail.com'),
// (35, 'Nitin', 30, 'Pune', 'Sales', 56000.00, 8, 'nitin@gmail.com'),
// (36, 'Komal', 25, 'Mumbai', 'IT', 39000.00, 3, 'komal@gmail.com'),
// (37, 'Aditya', 28, 'Delhi', 'Finance', 51000.00, 6, 'aditya@gmail.com'),
// (38, 'Bhavna', 23, 'Indore', 'Sales', 30000.00, 2, NULL),
// (39, 'Harsh', 31, 'Pune', 'HR', 62000.00, 9, 'harsh@gmail.com'),
// (40, 'Payal', 26, 'Mumbai', 'Finance', 45000.00, 4, 'payal@gmail.com'),
// (41, 'Gaurav', 29, 'Delhi', 'IT', 53000.00, 7, 'gaurav@gmail.com'),
// (42, 'Muskan', 22, 'Indore', 'HR', 26000.00, 1, 'muskan@gmail.com'),
// (43, 'Yash', 27, 'Pune', 'Sales', 47000.00, 5, NULL),
// (44, 'Nidhi', 28, 'Mumbai', 'IT', 50000.00, 6, 'nidhi@gmail.com'),
// (45, 'Tarun', 32, 'Delhi', 'Sales', 68000.00, 10, 'tarun@gmail.com'),
// (46, 'Radhika', 24, 'Indore', 'Finance', 35000.00, 3, 'radhika@gmail.com'),
// (47, 'Ashish', 30, 'Pune', 'IT', 59000.00, 8, 'ashish@gmail.com'),
// (48, 'Preeti', 25, 'Mumbai', 'HR', 38000.00, 3, NULL),
// (49, 'Sanjay', 33, 'Delhi', 'Finance', 72000.00, 11, 'sanjay@gmail.com'),
// (50, 'Kriti', 23, 'Indore', 'IT', 31000.00, 2, 'kriti@gmail.com');




