const mongoose = require('mongoose')
let categoryschema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Category Must Be Fill']
    }
}, {timestamps:true})

module.exports = mongoose.model('Category', categoryschema)