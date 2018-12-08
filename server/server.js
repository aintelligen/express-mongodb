const express = require('express')
const cors = require('express-cors')
const router = require('./routes/router')
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

// express配置
const port = 9060;
const ip = '192.168.10.169';

// 跨域
app.use(cors({
  allowedOrigins: [
    'localhost',
    '192.168.10.169',
  ]
}))
// 日志
app.use(logger('dev'))
// cookie
app.use(cookieParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// router
app.use(router)



app.listen(port, ip, () => {
  console.log('Express Server is running http://' + ip + ':' + port)
})