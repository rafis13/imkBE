const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const HASH_ROUND = 10

let playerSchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, 'Email Must Been Filled']
  },
  name: {
    type: String,
    require: [true, 'Name Must Been Filled'],
    maxlength :[225, "The Length of The Name Must Be Between 3 - 225 Characters"],
    minlength :[3, "The Length of The Name Must Be Between 3 - 225 Characters"]
  },
  username: {
    type: String,
    require: [true, 'Name Must Been Filled'],
    maxlength :[225, "The Length of The Username Must Be Between 3 - 225 Characters"],
    minlength :[3, "The Length of The Username Must Be Between 3 - 225 Characters"]
  },
  password: {
    type: String,
    require: [true, 'Password Is Required'],
    maxlength :[225, "Maximum Password Length Is 225 Characters"],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  status: {
    type: String,
    enum: ['Y', 'N'],
    default: 'Y'
  },
  avatar: {type : String},
  fileName : {type : String},
  phoneNumber: {
    type: String,
    require: [true, 'Phone Number Is Required'],
    maxlength :[13, "The Length of The Phone Number Must Be Between 9 - 13 Characters"],
    minlength :[9, "The Length of The Phone Number Must Be Between 9 - 13 Characters"]
  },

  favorite  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },

}, { timestamps: true })

playerSchema.path('email').validate(async function (value){
  try {
    const count = await this.model('Player').countDocuments({ email : value })
    return !count;
  } catch (err) {
    throw err
  }

}, attr => `${attr.value} sudah terdaftar`)

playerSchema.pre('save', function (next){
  this.password = bcrypt.hashSync(this.password, HASH_ROUND)
  next()
})

module.exports = mongoose.model('Player', playerSchema)
