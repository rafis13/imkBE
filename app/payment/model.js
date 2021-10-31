const mongoose = require('mongoose')
let paymentSchema = mongoose.Schema({
    type: {
        type: String,
        require:[true, 'Payment Type Have Must Been Filled']
    },
    status:{
        type: String,
        enum:['Y','N'],
        default: [' Y']
    },
banks:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Bank'
}]
})

module.exports = mongoose.model('Payment', paymentSchema)