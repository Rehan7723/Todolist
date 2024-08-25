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
            body: "bad connection",
            error
        })
    }
}

//ok

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



exports.deleteList= async(req,res)=>{
    try {
        const cat= await List.findByIdAndDelete()
        res.status(201).json({
            success: true,
            cat
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            body: "bad connection"
        })
    }
}

