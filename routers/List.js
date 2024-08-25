const express= require('express')

const router= express.Router()


const {
    createList,
    getList,
    deleteList
       

} = require('../controllers/List')

router.post('/',createList) //creating the table

router.get('/',getList) //getting the values of the table

router.delete('/:id', deleteList) //deleting by id



module.exports=router

