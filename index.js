const express=require('express');
const app=express()
const connectDB= require('./db');
connectDB()
app.use(express.json())



app.get('/',(req,res)=>{
     res.status(200).json({
        success: false,
        desc: "good good"
    })
})


app.get('/hello',(req,res)=>{
    res.status(400).json({
        success:true,
        message:"This is the hello router"
    })
    
})


const listRoute= require('./routers/List')

app.use('/list',listRoute)






const port=8000
app.listen(port,()=>{
    console.log("App listening to 8000 port");
})
