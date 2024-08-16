const mongoose=require ('mongoose')

const TodoSchema=mongoose.Schema({
    id: Number,
    event: String,
})

const List= mongoose.model('List', TodoSchema)

module.exports= List