const mongoose=require ('mongoose')

const TodoSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    event: String,
})

const List= mongoose.model('List', TodoSchema)

module.exports= List