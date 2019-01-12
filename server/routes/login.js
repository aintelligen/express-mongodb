const captchapng = require('captchapng');
const Model = require('../db/model')
const Loadshs = require('../utils/index')


class Login {
  constructor() {
  }
  captcha(req, res, next) {
    // let str = String(parseInt(Math.random() * 9000 + 1000));
    let str = String(4554);
    req.session.captcha = str;
    let png = new captchapng(str);
    png.color(0, 0, 0, 0);
    png.color(80, 80, 80, 255);
    let img = png.getBase(64);
    let imgbase64 = new Buffer(img, 'base64');
    res.writedHead(200, {
      'Content-Type': 'image/png'
    });
    res.end(imgbase64);
  }

  loginer = async (req, res, next) => {
    let { captcha, username, password } = req.body;
    // 为空判断

    // 登录验证
    if (captcha !== req.session.captcha) {
      res.json({
        "code": "0000",
        "data": null,
        "msg": "验证码错误"
      });
      res.end();
      next();
      return;
    }
    let ress = await Model.User.findOne({ username: username })









  }

}




module.exports = Login
