const express = require('express')
const router = express.Router();

// routes
const goods = require('./goods')

router.get('/', (req, res) => {
  res.send('<h1>Express is Starting</h1>')
})

router.use('/goods', goods);


module.exports = router;