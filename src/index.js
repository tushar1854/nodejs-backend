// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed !! ", err)
})
/*
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)/${DB_NAME}
    }catch(error){
        console.log("Error", error)
        throw err
    }
})()
*/