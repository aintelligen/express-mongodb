var createModel = require('./createDoc');
var mongoose = require('mongoose')
var Schema = mongoose.Schema;


const UserSchema = new Schema({
  "username": String,
  "password": String
})

const GoodsSchema = new Schema({
  "name": String,
  "desc": String
})

const Goods = new createModel('goods', GoodsSchema)
const User = new createModel('user', UserSchema)

module.exports = {
  Goods,
  User
};