const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    email: {
        type: String,
        require:[true, 'Email Have Must Been Filled']
    },
    name: {
        type: String,
        require:[true, 'Name Have Must Been Filled']
    },
    password: {
        type: String,
        require:[true, 'Password Have Must Been Filled']
    },
    role:{
        type: String,
        enum:['admin','user'],
        default: 'admin'
    },
    status:{
        type: String,
        enum:['Y','N'],
        default: 'Y'
    },
    phoneNumber:{
        type: String,
        require:[true, 'Phone Number Have Must Been Filled']
    },
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)