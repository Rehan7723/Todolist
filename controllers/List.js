const List=require('../models/Table')

exports.createList= async(req,res)=>{
    try {
        const cat= await List.create(req.body)
        res.status(201).json({
            success:true,
            body: cat
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            body: "bad connection"
        })
    }
}


exports.getList= async(req,res)=>{
    try {
        const cat= await List.find()
        res.status(201).json({
            success:true,
            body: cat.length
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            body: "bad connection"
        })
    }
}

