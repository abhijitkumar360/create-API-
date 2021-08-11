import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routers/users.js"
import mongoose from "mongoose"

const dbURI='mongodb+srv://abh1:123@cluster0.9jwi9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(
       (result)=>{
           console.log("connected to the database")
           server.listen(PORT)
           console.log("server started successfully")
            
       }
   )
   .catch(
       (err)=>{
           console.log(err)
       }
   )
const server=express()
const PORT=8888
server.use("/user",userRouter)
server.use(bodyParser.json())
server.get("/",(req,res)=> res.send("welcom to my library"))

server.use("/user",userRouter)
 


