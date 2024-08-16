const express= require('express')

const router= express.Router()


const {createList,
    getList
       

} = require('../controllers/List')

router.post('/',createList) //creating the table

router.get('/',getList) //getting the values of the table



module.exports=router

