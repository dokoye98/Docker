const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model('Customer',CustomerSchema)