const dotenv = require('dotenv')
const path=require('path')

dotenv.config()

module.exports = {
    rootPath : path.resolve(__dirname,'..'),
    serviceName: process.env.STOREGG,
    jwtKey: process.env.SECRET,
    urlDb: process.env.MONGO_URL
}