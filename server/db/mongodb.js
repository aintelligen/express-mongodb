const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/react_stack'

mongoose.connect(DB_URL, (err) => {
  if (!err) {
    console.log('MongoDB is connect open to: ' + DB_URL)
  } else {
    console.log('MongoDB is connect error : ' + err)
  }
})

module.exports = mongoose;