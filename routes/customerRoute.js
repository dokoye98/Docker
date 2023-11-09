const express = require('express')
const router = express()
const Customer  = require('../models/Customer')


router.post('/',async(req,res)=>{
    const dataFormat = new Customer({
        name :req.body.name,
        age:req.body.age
    }
    )

    try{
        const newCustomer = await dataFormat.save()
        return res.status(200).send({message:newCustomer})
    }catch(err){
        console.log({message:err})
        return res.status(400).send({message:err})
    }
})

module.exports = router