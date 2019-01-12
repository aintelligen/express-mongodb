const _ = require("lodash")

class Loadsh {
  constructor() { }
  isEmpty = (str) => {
    (_.isEmpty(str) || _.isNull(str) || _.isUndefined(str)) ? true : false;
  }
}

module.exports = Loadsh