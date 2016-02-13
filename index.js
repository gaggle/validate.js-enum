"use strict";
var _ = require("lodash")
var util = require("util")

var s = util.format

exports.register = function (module) {
  if (!module) module = require("validate.js")

  var val = function (value, options, key, attributes) {
    var values = _.values(options)
    if (module.contains(values, value)) return
    return s("is not an element of enum: %s", _.keys(options).join(", "))
  }

  var async = function (args) {
    args = arguments
    return new module.Promise(function (resolve) {
      var result = val.apply(this, args)
      resolve(result)
    })
  }

  module.validators.enum = val
  module.validators.enumAsync = async
}
