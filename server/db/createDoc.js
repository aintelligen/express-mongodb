const mongodb = require('./mongodb');

class MongoDB {
  constructor(collection, schema) {
    this.modelDB = mongodb.model(collection, schema)
  }
  // 查找 所有
  findAll(param = {}) {
    return new Promise((resolve, reject) => {
      this.modelDB.find(param, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  // 保存
  save(obj) {
    const m = this.modelDB(obj)
    return new Promise((resolve, reject) => {
      m.save((err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  // 查找 one
  findOne(data) {
    return new Promise((resolve, reject) => {
      this.modelDB.findOne(data, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  // 查找 by id
  findById(data) {
    return new Promise((resolve, reject) => {
      this.modelDB.findById(data, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  // 更新
  update(conditions, updata) {
    return new Promise((resolve, reject) => {
      // 查询条件，更新对象，callback
      this.modelDB.update(conditions, updata, (err, doc) => {
        err ? reject(err) : resolve(doc);
      })
    })
  }
  // 删除
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