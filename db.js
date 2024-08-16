const mongoose= require('mongoose')

const connectDB= async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/todo_list');
    console.log("Connection to DB was established")
}

module.exports=connectDB;