const mongoose = require('./mongodb');

class MongoDB {
  constructor(collection, schema) {
    this.modelDB = mongoose.model(collection, schema)
  }
  findAll(param = {}) {
    return new Promise((resolve, reject) => {
      this.modelDB.find(param, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  save(obj) {
    const m = this.modelDB(obj)
    return new Promise((resolve, reject) => {
      m.save((err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  findOne(data) {
    return new Promise((resolve, reject) => {
      this.modelDB.findOne(data, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  findById(data) {
    return new Promise((resolve, reject) => {
      this.modelDB.findById(data, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  update(conditions, updata) {
    return new Promise((resolve, reject) => {
      // 查询条件，更新对象，callback
      this.modelDB.update(conditions, updata, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  remove(conditions) {
    return new Promise((resolve, reject) => {
      // 查询条件，更新对象，callback
      this.modelDB.remove(conditions, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }


}


module.exports = MongoDB