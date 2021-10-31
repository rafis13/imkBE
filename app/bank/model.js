const mongoose = require('mongoose')
let bankschema = mongoose.Schema({
   
    name:{
        type: String,
        require:[true, 'Owner Name Have Must Been Filled']
    },
    bankName:{
        type: String,
        require:[true, 'Bank Name Have Must Been Filled']
    },
    accountNumber:{
        type: String,
        require:[true, 'Account Number Have Must Been Filled']
    },
})

module.exports = mongoose.model('Bank', bankschema)