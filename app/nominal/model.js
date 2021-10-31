const mongoose = require('mongoose')
let nominalschema = mongoose.Schema({
    coinQuantity: {
        type: Number,
        default:0
    },
    coinName:{
        type: String,
        require:[true, 'Coin Name Have Must Been Filled']
    },
price:{
    type:Number,
    default:0
}
})

module.exports = mongoose.model('Nominal', nominalschema)