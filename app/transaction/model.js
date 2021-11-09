const mongoose = require('mongoose')

let transactionSchema = mongoose.Schema({
  historyVoucherTopup :{
    gameName : { type : String, require: [true, 'Game Name Have Must Been Filled.']},
    category : { type : String, require: [true, 'Category Have Must Been Filled.']},
    thumbnail : { type : String },
    coinName : { type : String, require: [true, 'Coin Name Have Must Been Filled.']},
    coinQuantity : { type : String, require: [true, 'Coin Quantity Have Must Been Filled.']},
    price : { type : Number },
  },

  historyPayment : {
    name : { type : String, require: [true, 'Name Have Must Been Filled.']},
    type : { type : String, require: [true, 'Payment Type Have Must Been Filled.']},
    bankName : { type : String, require: [true, 'Bank Name Have Must Been Filled.']},
    accountNumber : { type : String, require: [true, 'Account Number Have Must Been Filled.']},
  },

  name : {
    type : String,
    require :[true, "Name Have Must Been Filled"],
    maxlength :[225, "The Length of The Name Must Be Between 3 - 225 Characters"],
    minlength :[3, "The Length of The Name Must Be Between 3 - 225 Characters"]
  },

  accountUser : {
    type : String,
    require :[true, "nama akun harus diisi"],
    maxlength :[225, "The Length of The Name Must Be Between 3 - 225 Characters"],
    minlength :[3, "The Length of The Name Must Be Between 3 - 225 Characters"]
  },

  tax :{
    type : Number,
    default: 0,
  },

  value : {
    type : Number,
    default : 0
  },

  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  },

  player  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },

  historyUser  : {
    name : { type : String, require: [true, 'Player Name Have Must Been Filled.']},
    phoneNumber : {
      type : Number,
      require :[true, "Account Name Have Must Been Filled"],
      maxlength :[13, "The Length of The Name Must Be Between 9 - 13 Characters"],
      minlength :[9, "The Length of The Name Must Be Between 9 - 13 Characters"]
    }
  },
  
  category  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  user  : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  
}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema)
