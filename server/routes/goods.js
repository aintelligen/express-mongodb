const express = require('express')
const router = express.Router();

const model = require('../db/model')

// 增
router.get('/save', async (req, res) => {
  console.log(req.query);
  let user = await model.Goods.save({
    name: req.query.name,
    desc: req.query.desc,
  });
  res.json(user)
})
// 删
router.get('/remove', async (req, res) => {
  console.log(req.query);
  let user = await model.Goods.remove({
    name: req.query.name
  });
  res.json(user)
})
// 改
router.get('/update', async (req, res) => {
  console.log(req.query);
  let user = await model.Goods.update({
    name: req.query.name
  }, { name: req.query.newName });
  res.json(user)
})
// 查
router.get('/find', async (req, res) => {
  let user = await model.Goods.findAll({});
  res.json(user)
})





module.exports = router;