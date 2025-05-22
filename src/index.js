import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from 'express'
import connectDB from './db/index.js';


dotenv.config({
    path: "./env"
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running at Port: ${process.env.PORT}`);
        
    })
})
.catch((e)=>{
    console.log("MONGODB Connection Failed");
    
})













/*
const app=express()

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR : ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is Listing on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ",error)
        
    }
})()

*/