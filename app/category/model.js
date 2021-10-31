const mongoose = require('mongoose')
let categoryschema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Category Must Be Fill']
    }
})

module.exports = mongoose.model('Category', categoryschema)